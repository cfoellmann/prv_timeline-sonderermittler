/* Timeline – Sonderermittler der Krone
 * Lädt data/folgen.json und rendert eine sortierbare Timeline.
 * Single-File-App, keine Build-Abhängigkeiten.
 */

(() => {
  'use strict';

  const STATE = {
    data: null,
    seriesById: new Map(),
    selectedFolge: null,
    sort: 'story',
    serienAktiv: new Set(),
    zirkelAktiv: new Set(['direkt', 'indirekt', 'unklar', 'kein']),
    showUnknown: true,
    showStubs: true,
  };

  const DOM = {
    timeline: document.getElementById('timeline'),
    detail: document.getElementById('detail'),
    statusMessage: document.getElementById('status-message'),
    metaCount: document.getElementById('meta-count'),
    metaStand: document.getElementById('meta-stand'),
    schemaVersion: document.getElementById('schema-version'),
    serienList: document.getElementById('serien-list'),
  };

  // ---------- Daten laden ----------

  async function loadData() {
    try {
      const res = await fetch('data/folgen.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (err) {
      const isFile = location.protocol === 'file:';
      const tip = isFile
        ? 'Die App wurde direkt aus dem Dateisystem geöffnet (file://).\n' +
          'Browser blockieren in diesem Modus den Daten-Fetch.\n\n' +
          'Lösung: ein lokaler HTTP-Server, z. B.:\n' +
          '  cd app\n' +
          '  python -m http.server 8033\n' +
          'Dann http://localhost:8033/ öffnen.\n\n' +
          'Alternative: VS Code Live Server Extension.'
        : 'Datei data/folgen.json konnte nicht geladen werden.';
      throw new Error(tip + '\n\nFehler: ' + err.message);
    }
  }

  // ---------- Hilfsfunktionen ----------

  function storySortKey(folge) {
    // Folgen ohne Story-Datum nach hinten — Sortierschlüssel = Infinity.
    if (folge.story_jahr == null) return Number.POSITIVE_INFINITY;
    const j = folge.story_jahr;
    const m = folge.story_monat ?? 6;   // unbekannter Monat → Mitte
    const t = folge.story_tag ?? 15;    // unbekannter Tag → Mitte
    // Tiebreaker: Folgennummer innerhalb gleicher Serie + Erscheinungsdatum
    return j * 1e10 + m * 1e8 + t * 1e6;
  }

  function erschienenSortKey(folge) {
    if (!folge.erschienen) return Number.POSITIVE_INFINITY;
    const d = new Date(folge.erschienen);
    return d.getTime();
  }

  function compareFolgen(a, b, mode) {
    const fnA = mode === 'story' ? storySortKey(a) : erschienenSortKey(a);
    const fnB = mode === 'story' ? storySortKey(b) : erschienenSortKey(b);
    if (fnA !== fnB) return fnA - fnB;
    // Fallback: Serie-id, dann Folgen-Nummer
    if (a.serie !== b.serie) return a.serie.localeCompare(b.serie);
    return (a.nummer || 0) - (b.nummer || 0);
  }

  function formatStoryDate(folge) {
    if (folge.story_jahr == null) {
      return folge.story_anmerkung ? '— (' + folge.story_anmerkung + ')' : 'Story-Datum unbekannt';
    }
    const j = folge.story_jahr;
    const m = folge.story_monat;
    const t = folge.story_tag;
    if (folge.story_praezision === 'tag' && t && m) {
      return `${String(t).padStart(2, '0')}.${String(m).padStart(2, '0')}.${j}`;
    }
    if (folge.story_praezision === 'monat' && m) {
      const monate = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'];
      return `${monate[m - 1]} ${j}`;
    }
    return String(j);
  }

  function formatErschienen(d) {
    if (!d) return '–';
    const date = new Date(d);
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  function passesFilter(folge) {
    if (!STATE.serienAktiv.has(folge.serie)) return false;
    const z = folge.zirkel || 'unklar';
    if (!STATE.zirkelAktiv.has(z)) return false;
    if (!STATE.showStubs && (folge.spoiler_level === 'stub' || folge.status === 'stub')) return false;
    if (STATE.sort === 'story' && !STATE.showUnknown && folge.story_jahr == null) return false;
    return true;
  }

  // ---------- Rendering ----------

  function renderControls() {
    const list = DOM.serienList;
    list.innerHTML = '';

    // Folgenzahl pro Serie aus dem aktuellen Datensatz
    const counts = new Map();
    for (const f of STATE.data.folgen) {
      counts.set(f.serie, (counts.get(f.serie) || 0) + 1);
    }

    for (const s of STATE.data.serien) {
      const item = document.createElement('div');
      item.className = 'serien-list-item' + (STATE.serienAktiv.has(s.id) ? '' : ' off');
      item.dataset.serie = s.id;
      item.innerHTML = `
        <span class="swatch" style="background:${s.farbe}"></span>
        <span class="label" title="${escapeHtml(s.titel)}">${escapeHtml(s.kurz)} – ${escapeHtml(s.titel.replace(/ – Sonderermittler.*/i, ''))}</span>
        <span class="count">${counts.get(s.id) || 0}</span>
      `;
      item.addEventListener('click', () => {
        if (STATE.serienAktiv.has(s.id)) STATE.serienAktiv.delete(s.id);
        else STATE.serienAktiv.add(s.id);
        renderControls();
        renderTimeline();
      });
      list.appendChild(item);
    }
  }

  function renderTimeline() {
    const folgen = STATE.data.folgen.filter(passesFilter);
    folgen.sort((a, b) => compareFolgen(a, b, STATE.sort));

    DOM.timeline.innerHTML = '';

    if (folgen.length === 0) {
      const msg = document.createElement('div');
      msg.className = 'status-message';
      msg.textContent = 'Keine Folgen entsprechen den aktuellen Filtern.';
      DOM.timeline.appendChild(msg);
      DOM.metaCount.textContent = '0 Folgen';
      return;
    }

    DOM.metaCount.textContent = `${folgen.length} Folge${folgen.length === 1 ? '' : 'n'}`;

    if (STATE.sort === 'story') {
      renderByStory(folgen);
    } else {
      renderByErschienen(folgen);
    }
  }

  function renderByStory(folgen) {
    const known = folgen.filter(f => f.story_jahr != null);
    const unknown = folgen.filter(f => f.story_jahr == null);

    const byYear = groupBy(known, f => f.story_jahr);
    const years = [...byYear.keys()].sort((a, b) => a - b);

    for (const y of years) {
      const yearFolgen = byYear.get(y);
      const section = document.createElement('div');
      section.className = 'year-section';

      const header = document.createElement('div');
      header.className = 'year-header';
      header.innerHTML = `<span>${y}</span><span class="year-meta">${yearFolgen.length} Folge${yearFolgen.length === 1 ? '' : 'n'}</span>`;
      section.appendChild(header);

      // Pro Monat gruppieren, wenn präzise
      const byMonth = groupBy(yearFolgen, f => f.story_monat ?? '?');
      const monthsSorted = [...byMonth.keys()].sort((a, b) => {
        if (a === '?') return 1;
        if (b === '?') return -1;
        return a - b;
      });

      for (const mo of monthsSorted) {
        const monatFolgen = byMonth.get(mo);
        if (mo !== '?' && monatFolgen.length > 0) {
          const monthHeader = document.createElement('div');
          monthHeader.className = 'month-header';
          const monate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
          monthHeader.textContent = monate[mo - 1];
          section.appendChild(monthHeader);
        } else if (mo === '?' && monatFolgen.length > 0 && yearFolgen.length > monatFolgen.length) {
          const monthHeader = document.createElement('div');
          monthHeader.className = 'month-header';
          monthHeader.textContent = '— Monat unbekannt —';
          section.appendChild(monthHeader);
        }
        const list = document.createElement('div');
        list.className = 'folge-list';
        for (const f of monatFolgen) list.appendChild(renderFolgeCard(f));
        section.appendChild(list);
      }
      DOM.timeline.appendChild(section);
    }

    if (unknown.length > 0 && STATE.showUnknown) {
      const section = document.createElement('div');
      section.className = 'year-section unknown-section';
      const header = document.createElement('div');
      header.className = 'year-header';
      header.innerHTML = `<span>Story-Datum unbekannt</span><span class="year-meta">${unknown.length} Folge${unknown.length === 1 ? '' : 'n'}, sortiert nach Erscheinen</span>`;
      section.appendChild(header);

      const list = document.createElement('div');
      list.className = 'folge-list';
      // Ohne Story-Datum nach Erscheinungsdatum sortieren
      unknown.sort((a, b) => erschienenSortKey(a) - erschienenSortKey(b));
      for (const f of unknown) list.appendChild(renderFolgeCard(f));
      section.appendChild(list);
      DOM.timeline.appendChild(section);
    }
  }

  function renderByErschienen(folgen) {
    // Nach Jahr der Veröffentlichung gruppieren
    const byYear = groupBy(folgen, f => {
      if (!f.erschienen) return '?';
      return new Date(f.erschienen).getFullYear();
    });
    const years = [...byYear.keys()].sort((a, b) => {
      if (a === '?') return 1;
      if (b === '?') return -1;
      return a - b;
    });

    for (const y of years) {
      const yearFolgen = byYear.get(y);
      const section = document.createElement('div');
      section.className = 'year-section';
      const header = document.createElement('div');
      header.className = 'year-header';
      const label = y === '?' ? 'Erscheinungsdatum unbekannt' : `${y} (Realwelt)`;
      header.innerHTML = `<span>${label}</span><span class="year-meta">${yearFolgen.length} Folge${yearFolgen.length === 1 ? '' : 'n'}</span>`;
      section.appendChild(header);

      const list = document.createElement('div');
      list.className = 'folge-list';
      for (const f of yearFolgen) list.appendChild(renderFolgeCard(f));
      section.appendChild(list);
      DOM.timeline.appendChild(section);
    }
  }

  function renderFolgeCard(folge) {
    const serie = STATE.seriesById.get(folge.serie);
    const card = document.createElement('div');
    card.className = 'folge-card';
    if (STATE.selectedFolge && STATE.selectedFolge.id === folge.id) card.classList.add('selected');
    card.style.borderLeftColor = serie ? serie.farbe : 'var(--border)';

    const z = folge.zirkel || 'unklar';
    const isStub = folge.spoiler_level === 'stub' || folge.status === 'stub';

    card.innerHTML = `
      <div class="badge" style="color:${serie ? serie.farbe : 'var(--text-dim)'}">
        <div class="serie-kurz">${escapeHtml(serie ? serie.kurz : '?')}</div>
        <div class="nummer">${folge.nummer ?? '?'}</div>
      </div>
      <div class="body">
        <div class="titel">
          ${escapeHtml(folge.titel)}
          <span class="zirkel-pill ${z}">${z}</span>
          ${isStub ? '<span class="stub-marker">stub</span>' : ''}
        </div>
        <div class="anm">${formatCardAnm(folge)}</div>
      </div>
    `;
    card.addEventListener('click', () => selectFolge(folge));
    return card;
  }

  function formatCardAnm(folge) {
    const story = formatStoryDate(folge);
    const erschienen = folge.erschienen ? `· erschienen ${formatErschienen(folge.erschienen)}` : '';
    const anm = folge.story_anmerkung && folge.story_jahr != null
      ? ` · ${escapeHtml(folge.story_anmerkung)}`
      : '';
    return `<span style="color:var(--text-dim)">${escapeHtml(story)}</span> ${escapeHtml(erschienen)}${anm}`;
  }

  function selectFolge(folge) {
    STATE.selectedFolge = folge;
    renderDetail();
    // Re-Highlight
    document.querySelectorAll('.folge-card').forEach(c => c.classList.remove('selected'));
    event && event.currentTarget && event.currentTarget.classList && event.currentTarget.classList.add('selected');
  }

  function renderDetail() {
    const f = STATE.selectedFolge;
    if (!f) {
      DOM.detail.innerHTML = '<div class="detail-empty"><p>Eine Folge anklicken, um Details zu sehen.</p></div>';
      return;
    }
    const s = STATE.seriesById.get(f.serie);
    const wikiPath = f.wiki ? `../${f.wiki}` : null;
    const seriesWiki = s && s.wiki ? `../${s.wiki}` : null;

    DOM.detail.innerHTML = `
      <h2 style="border-left:4px solid ${s ? s.farbe : 'var(--accent)'}; padding-left:10px">
        ${escapeHtml(f.titel)}
      </h2>
      <div class="serie-line">
        ${escapeHtml(s ? s.titel : f.serie)} · Folge ${f.nummer ?? '?'}
      </div>

      <div class="field">
        <div class="key">Story-Zeit</div>
        <div class="val ${f.story_jahr == null ? 'muted' : ''}">${escapeHtml(formatStoryDate(f))}</div>
      </div>
      <div class="field">
        <div class="key">Erschienen</div>
        <div class="val ${!f.erschienen ? 'muted' : ''}">${escapeHtml(formatErschienen(f.erschienen))}</div>
      </div>
      <div class="field">
        <div class="key">Zirkel-Bezug</div>
        <div class="val">${escapeHtml(f.zirkel || 'unklar')}</div>
      </div>
      <div class="field">
        <div class="key">Spoiler</div>
        <div class="val">${escapeHtml(f.spoiler_level || 'stub')}</div>
      </div>
      ${f.logline ? `
      <div class="field">
        <div class="key">Logline</div>
        <div class="val">${escapeHtml(f.logline)}</div>
      </div>` : ''}

      ${f.story_anmerkung ? `<div class="anm-block">${escapeHtml(f.story_anmerkung)}</div>` : ''}
      ${f.anmerkung ? `<div class="anm-block">${escapeHtml(f.anmerkung)}</div>` : ''}

      <div class="actions">
        ${wikiPath ? `<a href="${wikiPath}">Folgen-Seite im Wiki</a>` : ''}
        ${seriesWiki ? `<a href="${seriesWiki}">Serien-Übersicht</a>` : ''}
      </div>
    `;
  }

  function showError(msg) {
    DOM.timeline.innerHTML = `<div class="status-message error">${escapeHtml(msg)}</div>`;
  }

  // ---------- Helpers ----------

  function groupBy(arr, keyFn) {
    const map = new Map();
    for (const item of arr) {
      const k = keyFn(item);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(item);
    }
    return map;
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---------- Event-Wiring ----------

  function wireEvents() {
    // Sortierung
    document.querySelectorAll('input[name="sort"]').forEach(r => {
      r.addEventListener('change', e => {
        STATE.sort = e.target.value;
        renderTimeline();
      });
    });

    // Zirkel-Filter
    document.querySelectorAll('input[data-filter="zirkel"]').forEach(c => {
      c.addEventListener('change', e => {
        if (e.target.checked) STATE.zirkelAktiv.add(e.target.value);
        else STATE.zirkelAktiv.delete(e.target.value);
        renderTimeline();
      });
    });

    // Anzeige-Toggles
    document.getElementById('show-unknown').addEventListener('change', e => {
      STATE.showUnknown = e.target.checked;
      renderTimeline();
    });
    document.getElementById('show-stubs').addEventListener('change', e => {
      STATE.showStubs = e.target.checked;
      renderTimeline();
    });

    // Serien-Massenaktionen
    document.getElementById('serien-all').addEventListener('click', () => {
      STATE.serienAktiv = new Set(STATE.data.serien.map(s => s.id));
      renderControls();
      renderTimeline();
    });
    document.getElementById('serien-none').addEventListener('click', () => {
      STATE.serienAktiv = new Set();
      renderControls();
      renderTimeline();
    });
  }

  // ---------- Init ----------

  async function init() {
    try {
      const data = await loadData();
      STATE.data = data;
      STATE.seriesById = new Map(data.serien.map(s => [s.id, s]));
      STATE.serienAktiv = new Set(data.serien.map(s => s.id));

      DOM.metaStand.textContent = 'Stand ' + data.stand;
      DOM.schemaVersion.textContent = data.schema_version;

      renderControls();
      renderTimeline();
      renderDetail();
      wireEvents();
    } catch (err) {
      console.error(err);
      showError(err.message);
    }
  }

  init();
})();
