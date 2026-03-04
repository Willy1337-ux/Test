/* ─── Data ──────────────────────────────────────── */
const PLANETS = [
  {
    id: 'mercury',
    name: 'Merkur',
    emoji: '⚫',
    color: '#b0b0b0',
    bg: 'radial-gradient(circle at 35% 35%, #d4d4d4, #8a8a8a 60%, #5a5a5a)',
    shadow: 'rgba(176,176,176,0.5)',
    type: 'Steinplanet',
    orbitRadius: 70,
    orbitPeriod: 6,
    size: 10,
    description:
      'Merkur er den innerste og minste planeten i solsystemet. Den har ingen atmosfære å snakke om, noe som fører til enorme temperaturvariasjoner – fra 430 °C på dagssiden til −180 °C på nattsiden.',
    stats: [
      { label: 'Avstand fra solen', value: '57,9 mill. km' },
      { label: 'Omløpstid', value: '88 jorddager' },
      { label: 'Rotasjonstid', value: '59 jorddager' },
      { label: 'Diameter', value: '4 879 km' },
      { label: 'Overflatetemperatur', value: '−180 °C → 430 °C' },
      { label: 'Antall måner', value: '0' },
    ],
  },
  {
    id: 'venus',
    name: 'Venus',
    emoji: '🟡',
    color: '#e8b84b',
    bg: 'radial-gradient(circle at 35% 35%, #f7e07a, #d4a017 55%, #a07000)',
    shadow: 'rgba(232,184,75,0.5)',
    type: 'Steinplanet',
    orbitRadius: 100,
    orbitPeriod: 10,
    size: 14,
    description:
      'Venus er den varmeste planeten i solsystemet med en gjennomsnittstemperatur på 464 °C, takket være en tykk atmosfære av karbondioksid og svovelsyre-skyer. Den roterer baklengs sammenlignet med de fleste planeter.',
    stats: [
      { label: 'Avstand fra solen', value: '108,2 mill. km' },
      { label: 'Omløpstid', value: '225 jorddager' },
      { label: 'Rotasjonstid', value: '243 jorddager' },
      { label: 'Diameter', value: '12 104 km' },
      { label: 'Overflatetemperatur', value: '464 °C' },
      { label: 'Antall måner', value: '0' },
    ],
  },
  {
    id: 'earth',
    name: 'Jorden',
    emoji: '🌍',
    color: '#4fc3f7',
    bg: 'radial-gradient(circle at 35% 35%, #a8e6cf, #4fc3f7 45%, #0288d1 70%, #01579b)',
    shadow: 'rgba(79,195,247,0.5)',
    type: 'Steinplanet',
    orbitRadius: 136,
    orbitPeriod: 15,
    size: 15,
    description:
      'Jorden er den eneste kjente planeten med liv. Den har flytende vann på overflaten, en beskyttende atmosfære og en magnetosfære som skjermer mot solens stråling. Omtrent 71 % av overflaten er dekket av hav.',
    stats: [
      { label: 'Avstand fra solen', value: '149,6 mill. km' },
      { label: 'Omløpstid', value: '365,25 dager' },
      { label: 'Rotasjonstid', value: '24 timer' },
      { label: 'Diameter', value: '12 742 km' },
      { label: 'Overflatetemperatur', value: '−88 °C → 58 °C' },
      { label: 'Antall måner', value: '1 (Månen)' },
    ],
  },
  {
    id: 'mars',
    name: 'Mars',
    emoji: '🔴',
    color: '#ef5350',
    bg: 'radial-gradient(circle at 35% 35%, #ff8a80, #d32f2f 55%, #8b1a1a)',
    shadow: 'rgba(239,83,80,0.5)',
    type: 'Steinplanet',
    orbitRadius: 172,
    orbitPeriod: 20,
    size: 12,
    description:
      'Mars er kjent som den røde planeten på grunn av jernoksid (rust) i jordoverflaten. Den har det høyeste fjellet i solsystemet – Olympus Mons (21 km) – og en enorm canyon, Valles Marineris. Mars er et mulig mål for menneskelig utforskning.',
    stats: [
      { label: 'Avstand fra solen', value: '227,9 mill. km' },
      { label: 'Omløpstid', value: '687 jorddager' },
      { label: 'Rotasjonstid', value: '24 t 37 min' },
      { label: 'Diameter', value: '6 779 km' },
      { label: 'Overflatetemperatur', value: '−143 °C → 35 °C' },
      { label: 'Antall måner', value: '2 (Phobos & Deimos)' },
    ],
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    emoji: '🟠',
    color: '#ff9800',
    bg: 'radial-gradient(circle at 35% 35%, #ffe0b2, #ff9800 40%, #e65100)',
    shadow: 'rgba(255,152,0,0.5)',
    type: 'Gasskjempe',
    orbitRadius: 220,
    orbitPeriod: 28,
    size: 26,
    description:
      'Jupiter er den største planeten i solsystemet – over 1 300 ganger volumet av Jorden. Den store røde flekken er et gigantisk stormsystem som har rast i over 350 år. Jupiter fungerer som en gravitasjonsskjold for de indre planetene.',
    stats: [
      { label: 'Avstand fra solen', value: '778,5 mill. km' },
      { label: 'Omløpstid', value: '11,9 jordar' },
      { label: 'Rotasjonstid', value: '9 t 56 min' },
      { label: 'Diameter', value: '139 820 km' },
      { label: 'Overflatetemperatur', value: '−108 °C (sky)' },
      { label: 'Antall måner', value: '95 kjente' },
    ],
  },
  {
    id: 'saturn',
    name: 'Saturn',
    emoji: '🪐',
    color: '#f5e08a',
    bg: 'radial-gradient(circle at 35% 35%, #fff8d0, #c9b046 55%, #806b00)',
    shadow: 'rgba(245,224,138,0.5)',
    type: 'Gasskjempe',
    orbitRadius: 270,
    orbitPeriod: 34,
    size: 23,
    description:
      'Saturn er berømt for sine spektakulære ringer av is og stein. Den er den minst tette planeten i solsystemet – den ville faktisk flyte på vann. Saturn har 146 kjente måner, inkludert Titan som har en tykk atmosfære og metansjøer.',
    stats: [
      { label: 'Avstand fra solen', value: '1,43 mrd. km' },
      { label: 'Omløpstid', value: '29,5 jordar' },
      { label: 'Rotasjonstid', value: '10 t 42 min' },
      { label: 'Diameter', value: '116 460 km' },
      { label: 'Overflatetemperatur', value: '−139 °C (sky)' },
      { label: 'Antall måner', value: '146 kjente' },
    ],
  },
  {
    id: 'uranus',
    name: 'Uranus',
    emoji: '🔵',
    color: '#80deea',
    bg: 'radial-gradient(circle at 35% 35%, #e0f7fa, #4dd0e1 50%, #00838f)',
    shadow: 'rgba(128,222,234,0.5)',
    type: 'Isgigant',
    orbitRadius: 320,
    orbitPeriod: 40,
    size: 18,
    description:
      'Uranus er en isgigant med en spesiell egenskap: den roterer på siden med en aksehelling på nesten 98°. Den er den kaldeste planeten i solsystemet med −224 °C. Uranus ble oppdaget i 1781 av William Herschel.',
    stats: [
      { label: 'Avstand fra solen', value: '2,87 mrd. km' },
      { label: 'Omløpstid', value: '84 jordar' },
      { label: 'Rotasjonstid', value: '17 t 14 min' },
      { label: 'Diameter', value: '50 724 km' },
      { label: 'Overflatetemperatur', value: '−224 °C' },
      { label: 'Antall måner', value: '28 kjente' },
    ],
  },
  {
    id: 'neptune',
    name: 'Neptun',
    emoji: '🌊',
    color: '#3f51b5',
    bg: 'radial-gradient(circle at 35% 35%, #7986cb, #3949ab 50%, #1a237e)',
    shadow: 'rgba(63,81,181,0.5)',
    type: 'Isgigant',
    orbitRadius: 370,
    orbitPeriod: 46,
    size: 17,
    description:
      'Neptun er den ytterste planeten i solsystemet. Den har de kraftigste vindene – opptil 2 100 km/t. Neptun ble oppdaget i 1846 ved hjelp av matematiske beregninger, før den faktisk ble observert med teleskop.',
    stats: [
      { label: 'Avstand fra solen', value: '4,5 mrd. km' },
      { label: 'Omløpstid', value: '164,8 jordar' },
      { label: 'Rotasjonstid', value: '16 t 6 min' },
      { label: 'Diameter', value: '49 244 km' },
      { label: 'Overflatetemperatur', value: '−218 °C' },
      { label: 'Antall måner', value: '16 kjente' },
    ],
  },
];

const SUN = {
  id: 'sun',
  name: 'Solen',
  emoji: '☀️',
  color: '#ffd700',
  bg: 'radial-gradient(circle at 35% 35%, #fff9a0, #ffd700 45%, #ff8c00 75%, #ff4500)',
  shadow: 'rgba(255,215,0,0.6)',
  type: 'Stjerne (G-type)',
  description:
    'Solen er stjernen i sentrum av solsystemet og utgjør 99,86 % av all massen. Den er en G-type hovedseriestjerne som omdanner 600 millioner tonn hydrogen til helium per sekund via fusjon. Solen er ca. 4,6 milliarder år gammel og vil brenne i ytterligere ~5 milliarder år.',
  stats: [
    { label: 'Alder', value: '4,6 mrd. år' },
    { label: 'Diameter', value: '1 392 700 km' },
    { label: 'Masse', value: '1,989 × 10³⁰ kg' },
    { label: 'Overflatetemperatur', value: '5 778 K' },
    { label: 'Kjernetemperatur', value: '15 mill. °C' },
    { label: 'Lysreiseavstand til Jord', value: '8 min 20 sek' },
  ],
};

const STARS = [
  {
    id: 'sun-star',
    name: 'Solen',
    emoji: '☀️',
    color: '#ffd700',
    type: 'G-type stjerne',
    constellation: 'Solsystemet vårt',
    distance: '0 lysår (149,6 mill. km)',
    temperature: '5 778 K',
    radius: '696 000 km',
    luminosity: '1 L☉ (referanseverdi)',
    age: '4,6 milliarder år',
    description:
      'Solen er vår nærmeste stjerne og livskilden for alt på Jorden. Den er en gjennomsnittlig gul dvergstjerne som fusjonerer hydrogen i kjernen.',
  },
  {
    id: 'proxima',
    name: 'Proxima Centauri',
    emoji: '🔴',
    color: '#ef5350',
    type: 'Rød dverg (M-type)',
    constellation: 'Centauren',
    distance: '4,24 lysår',
    temperature: '3 042 K',
    radius: '107 200 km',
    luminosity: '0,0017 L☉',
    age: '4,85 milliarder år',
    description:
      'Proxima Centauri er den nærmeste stjernen til solsystemet vårt. Den er en liten, kald rød dverg med en planet i den beboelige sonen – Proxima b.',
  },
  {
    id: 'sirius',
    name: 'Sirius',
    emoji: '💙',
    color: '#82b1ff',
    type: 'Hvit stjerne (A-type)',
    constellation: 'Store Hund',
    distance: '8,6 lysår',
    temperature: '9 940 K',
    radius: '1 190 600 km',
    luminosity: '25,4 L☉',
    age: '242 millioner år',
    description:
      'Sirius er den klareste stjernen på nattehimmelen. Den er faktisk et dobbeltstjernesystem (Sirius A og B) og er omtrent dobbelt så stor som solen.',
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    emoji: '🟠',
    color: '#ff7043',
    type: 'Rød superkjempe (M-type)',
    constellation: 'Orion',
    distance: '700 lysår',
    temperature: '3 590 K',
    radius: '887 mill. km',
    luminosity: '100 000 L☉',
    age: '8–8,5 millioner år',
    description:
      'Betelgeuse er en enorm rød superkjempe som er så stor at den ville strekt seg forbi Jupiters bane hvis den sto i stedet for Solen. Den forventes å eksplodere som en supernova en gang i fremtiden.',
  },
  {
    id: 'vega',
    name: 'Vega',
    emoji: '⭐',
    color: '#e3f2fd',
    type: 'Hvit-blå stjerne (A-type)',
    constellation: 'Lyren',
    distance: '25 lysår',
    temperature: '9 602 K',
    radius: '1 721 000 km',
    luminosity: '40,1 L☉',
    age: '455 millioner år',
    description:
      'Vega er den femte klareste stjernen på himmelen og en av hjørnene i det kjente asterismen "Sommertriangelen". Den roterer svært raskt og er merkbart ablatert ved polene.',
  },
  {
    id: 'rigel',
    name: 'Rigel',
    emoji: '🔷',
    color: '#90caf9',
    type: 'Blå superkjempe (B-type)',
    constellation: 'Orion',
    distance: '860 lysår',
    temperature: '12 100 K',
    radius: '78 900 000 km',
    luminosity: '120 000 L☉',
    age: '8 millioner år',
    description:
      'Rigel er Orions klareste stjerne og en av de lysesterke stjernene som er synlige for det blotte øye. Til tross for at den heter "Beta Orionis", er den faktisk klarere enn Alpha-stjernen Betelgeuse.',
  },
  {
    id: 'aldebaran',
    name: 'Aldebaran',
    emoji: '🧡',
    color: '#ff8f00',
    type: 'Oransje kjempe (K-type)',
    constellation: 'Tyren',
    distance: '65 lysår',
    temperature: '3 910 K',
    radius: '34 730 000 km',
    luminosity: '518 L☉',
    age: '6,4 milliarder år',
    description:
      'Aldebaran er den klareste stjernen i stjernebildet Tyren og representerer "øyet til oksen". Den er en kjempestjerne som har forlatt hovedserien og utvidet seg enormt.',
  },
  {
    id: 'antares',
    name: 'Antares',
    emoji: '💥',
    color: '#d84315',
    type: 'Rød superkjempe (M-type)',
    constellation: 'Skorpionen',
    distance: '550 lysår',
    temperature: '3 400 K',
    radius: '863 mill. km',
    luminosity: '170 000 L☉',
    age: '12 millioner år',
    description:
      'Antares er den klareste stjernen i Skorpionen og navnet betyr "rivalen til Mars" (anti-Ares) fordi den har en lik rødoransje farge. Den er en massiv rød superkjempe nær slutten av livet.',
  },
];

/* ─── Utility ───────────────────────────────────── */
function makeStarfield() {
  const layer = document.getElementById('starsLayer');
  if (!layer) return;
  const count = 200;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'star-dot';
    const size = Math.random() * 2.5 + 0.5;
    dot.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random() * 100}%;
      left:${Math.random() * 100}%;
      --dur:${(Math.random() * 4 + 2).toFixed(1)}s;
      animation-delay:${(Math.random() * 4).toFixed(1)}s;
    `;
    layer.appendChild(dot);
  }
}

function buildDetailHTML(obj) {
  const statsHTML = obj.stats
    ? obj.stats.map(s => `
        <div class="stat-item">
          <span class="stat-label">${s.label}</span>
          <span class="stat-value">${s.value}</span>
        </div>`).join('')
    : [
        { label: 'Type', value: obj.type },
        { label: 'Avstand', value: obj.distance },
        { label: 'Temperatur', value: obj.temperature },
        { label: 'Radius', value: obj.radius },
        { label: 'Lysstyrke', value: obj.luminosity },
        { label: 'Alder', value: obj.age },
      ].map(s => `
        <div class="stat-item">
          <span class="stat-label">${s.label}</span>
          <span class="stat-value">${s.value}</span>
        </div>`).join('');

  return `
    <div class="detail-body">
      <div class="detail-visual" style="background:${obj.bg || obj.color}; box-shadow: 0 0 30px 10px ${obj.shadow || obj.color}44;">
        <span style="font-size:2.4rem">${obj.emoji}</span>
      </div>
      <div class="detail-info">
        <h2>${obj.name}</h2>
        <span class="type-badge">${obj.type}</span>
        <p class="description">${obj.description}</p>
        <div class="detail-stats">${statsHTML}</div>
      </div>
    </div>`;
}

function showDetail(obj) {
  const panel = document.getElementById('detailPanel');
  const inner = document.getElementById('detailInner');
  const closeBtn = document.getElementById('closeBtn');
  inner.innerHTML = buildDetailHTML(obj);
  closeBtn.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ─── Solar system builder ──────────────────────── */
function buildSolarSystem() {
  const container = document.getElementById('orbitsContainer');
  if (!container) return;
  container.innerHTML = '';

  PLANETS.forEach(planet => {
    // Orbit ring
    const ring = document.createElement('div');
    ring.className = 'orbit-ring';
    const d = planet.orbitRadius * 2;
    ring.style.cssText = `width:${d}px; height:${d}px;`;
    container.appendChild(ring);

    // Planet wrapper animating around orbit
    const wrapper = document.createElement('div');
    wrapper.className = 'planet-orbit';
    wrapper.style.cssText = `
      width: 0; height: 0;
      animation: orbit${planet.id} ${planet.orbitPeriod}s linear infinite;
    `;

    // Inject keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes orbit${planet.id} {
        from { transform: rotate(0deg) translateX(${planet.orbitRadius}px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(${planet.orbitRadius}px) rotate(-360deg); }
      }
    `;
    document.head.appendChild(style);

    // Planet button
    const btn = document.createElement('button');
    btn.className = 'planet-btn';
    const half = planet.size / 2;
    btn.style.cssText = `
      width:${planet.size}px; height:${planet.size}px;
      background: ${planet.bg};
      box-shadow: 0 0 10px 3px ${planet.shadow};
      margin-left: ${-half}px; margin-top: ${-half}px;
    `;
    btn.title = planet.name;
    btn.setAttribute('aria-label', planet.name);

    const label = document.createElement('span');
    label.className = 'planet-label';
    label.textContent = planet.name;
    btn.appendChild(label);

    btn.addEventListener('click', () => showDetail(planet));

    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  });

  // Saturn ring decoration
  const saturnEntry = PLANETS.find(p => p.id === 'saturn');
  if (saturnEntry) {
    // We rely on the emoji in the detail; keeping it minimal here.
  }
}

/* ─── Planet grid builder ───────────────────────── */
function buildPlanetGrid() {
  const grid = document.getElementById('planetGrid');
  if (!grid) return;

  const allItems = [SUN, ...PLANETS];
  allItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const miniStats = item.stats
      ? item.stats.slice(0, 2).map(s => `<span class="mini-stat">${s.label}: ${s.value}</span>`).join('')
      : '';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon" style="background:${item.bg || item.color}; box-shadow: 0 0 12px ${item.shadow || item.color}55;">
          <span>${item.emoji}</span>
        </div>
        <div>
          <div class="card-name">${item.name}</div>
          <div class="card-type">${item.type}</div>
        </div>
      </div>
      <p class="card-desc">${item.description}</p>
      <div class="card-mini-stats">${miniStats}</div>`;

    card.addEventListener('click', () => showDetail(item));
    grid.appendChild(card);
  });
}

/* ─── Star grid builder ─────────────────────────── */
function buildStarGrid() {
  const grid = document.getElementById('starGrid');
  if (!grid) return;

  STARS.forEach(star => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon" style="background:radial-gradient(circle, ${star.color}44, transparent); color:${star.color};">
          <span class="star-card-icon">${star.emoji}</span>
        </div>
        <div>
          <div class="card-name">${star.name}</div>
          <div class="card-type">${star.type}</div>
        </div>
      </div>
      <p class="card-desc">${star.description}</p>
      <div class="card-mini-stats">
        <span class="mini-stat">📍 ${star.distance}</span>
        <span class="mini-stat">🌡 ${star.temperature}</span>
      </div>`;

    card.addEventListener('click', () => {
      const starDetail = {
        ...star,
        bg: `radial-gradient(circle, ${star.color}66, transparent)`,
        shadow: `${star.color}44`,
        stats: [
          { label: 'Stjernebilde', value: star.constellation },
          { label: 'Avstand', value: star.distance },
          { label: 'Temperatur', value: star.temperature },
          { label: 'Radius', value: star.radius },
          { label: 'Lysstyrke', value: star.luminosity },
          { label: 'Alder', value: star.age },
        ],
      };
      showDetail(starDetail);
    });

    grid.appendChild(card);
  });
}

/* ─── Navigation ────────────────────────────────── */
function initNav() {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.section;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(`section-${sectionId}`);
      if (target) target.classList.add('active');
    });
  });
}

/* ─── Sun button ────────────────────────────────── */
function initSunBtn() {
  const btn = document.getElementById('sunBtn');
  if (btn) btn.addEventListener('click', () => showDetail(SUN));
}

/* ─── Close button ──────────────────────────────── */
function initCloseBtn() {
  const btn = document.getElementById('closeBtn');
  const inner = document.getElementById('detailInner');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.remove('visible');
      inner.innerHTML = '<p class="hint-text">⬆ Klikk på en planet eller solen for å se informasjon</p>';
    });
  }
}

/* ─── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  makeStarfield();
  buildSolarSystem();
  buildPlanetGrid();
  buildStarGrid();
  initNav();
  initSunBtn();
  initCloseBtn();
});
