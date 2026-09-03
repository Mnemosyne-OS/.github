/**
 * gen-art.mjs — the artwork for the organization profile page.
 *
 *   node scripts/gen-art.mjs
 *
 * Copy lives in scripts/art.config.json. Edit that, not this file.
 *
 * Each piece is ONE file in profile/assets/gen/, on the violet plate the brand
 * already uses on LinkedIn and in the app icon, whatever theme the reader has
 * GitHub set to. A kraft PAPIER variant was drawn and dropped on 2026-08-30:
 * Tony saw it live and asked for the plate on both. Do not reintroduce a second
 * palette without asking.
 *
 * So the palette is ONE :root block. If a second one ever does come back it
 * belongs in a `prefers-color-scheme` block INSIDE this file, and never in
 * <picture media="(prefers-color-scheme: dark)">, the documented GitHub
 * way: it cannot be combined with a link. Measured through GitHub's own
 * markdown API, `<a href="repo"><picture>…<img></picture></a>` comes back with
 * the <img> RIPPED OUT of the <picture> and re-anchored to the image file, so
 * the cartridge cards would have linked to an .svg instead of their repository
 * AND lost their variant. A bare <img> inside an anchor is left alone, so the
 * theme has to live inside the file. Re-measure before changing this back.
 *
 * Why SVG and not PNG like apps/infinity-edition/scripts/gen-banner.cjs: that
 * generator rasterises through Electron because its output is uploaded to
 * LinkedIn, which will not take vectors. A README renders SVG natively, so
 * nothing has to be rasterised and the type stays crisp at every zoom.
 *
 * The cost of live SVG text is that it is rendered with the VISITOR's fonts,
 * not ours: no webfont can load through GitHub's image proxy. So every layout
 * below is built to survive a font substitution. Text is anchored at an edge or
 * centred in a wide cell, never boxed tight around a string, and each line is
 * sized with roughly 25% of slack. Do not tighten a box onto a string here.
 *
 * SCALE, the thing that is easy to get wrong: a README column is about 800px
 * wide, so a 1600-unit piece is displayed at HALF SIZE and every font size here
 * is double its intended reading size. The first draft reused the LinkedIn
 * banner's sizes directly and every caption came out at 8px on the page. When
 * you add a piece, decide the size you want READ and author twice that.
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(HERE, '..', 'profile', 'assets', 'gen');

/**
 * The lemniscate. Byte-identical to MARK in
 * apps/infinity-edition/scripts/brand-mark.cjs and to build/icon.svg in the
 * app: the icon, the boot sigil, the social banners and this page are the same
 * drawing. If that path ever changes there, change it here too.
 */
const MARK = 'M32 32 C32 18 46 18 60 32 C74 46 88 46 88 32 C88 18 74 18 60 32 C46 46 32 46 32 32 Z';
const STROKE = 5.848;
/** pathLength is normalised to 300 so a 14-long dash straddles the crossing. */
const CROSSING = { pathLength: 300, dasharray: '14 286', dashoffset: -218 };

const SANS = "'Segoe UI', Inter, system-ui, -apple-system, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, 'Cascadia Mono', Consolas, 'SF Mono', Menlo, monospace";

/**
 * The palette comes from the design system, and every text pair on it was
 * measured with that system's check_contrast script rather than eyeballed:
 * ink 17.24:1, accent 7.17:1 and dim 5.66:1, all on the plate at #0E0E13.
 *
 * Colours are applied through style="" rather than presentation attributes:
 * var() is not honoured inside a presentation attribute.
 */
const TOKENS = `
    :root {
      --bg1:#16161D; --bg2:#0E0E13; --bg3:#07070A;
      --bloom:#7C4DFF; --bloomA:0.26; --tint:#A98BFF; --tintA:0.10;
      --ink:#F4F1FA; --dim:#8E88A0; --accent:#A98BFF; --kicker:#A98BFF;
      --hair:rgba(255,255,255,0.08); --panel:rgba(255,255,255,0.04); --edge:rgba(255,255,255,0.10);
      --stars:0.16;
      --m1:#7B5EA7; --m2:#A98BFF; --m3:#E4D6FF; --casing:#291F49; --glow:0.5;
    }`;

const esc = (v) =>
  String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function open(w, h, title, extraStyle = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(title)}">
  <title>${esc(title)}</title>
  <style>${TOKENS}${extraStyle}
  </style>`;
}

/**
 * The plate, plus the two blooms. `bloomX` puts the first bloom
 * over the mark, which is what makes --casing the colour the background
 * actually composites to at the mark's centre. Ink there would read as a hole
 * punched in the mark.
 */
function ground(w, h, bloomX) {
  return {
    defs: `<linearGradient id="plate" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" style="stop-color:var(--bg1)"/><stop offset="55%" style="stop-color:var(--bg2)"/><stop offset="100%" style="stop-color:var(--bg3)"/>
    </linearGradient>
    <radialGradient id="bloom" cx="${bloomX}%" cy="50%" r="46%">
      <stop offset="0%" style="stop-color:var(--bloom);stop-opacity:var(--bloomA)"/>
      <stop offset="55%" style="stop-color:var(--bloom);stop-opacity:calc(var(--bloomA) * 0.27)"/>
      <stop offset="100%" style="stop-color:var(--bloom);stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="tint" cx="84%" cy="14%" r="46%">
      <stop offset="0%" style="stop-color:var(--tint);stop-opacity:var(--tintA)"/>
      <stop offset="100%" style="stop-color:var(--tint);stop-opacity:0"/>
    </radialGradient>`,
    fill: `<rect width="${w}" height="${h}" fill="url(#plate)"/>
  <rect width="${w}" height="${h}" fill="url(#bloom)"/>
  <rect width="${w}" height="${h}" fill="url(#tint)"/>`,
  };
}

/** <defs> the mark needs. stdDeviation is in the mark's local units. */
const MARK_DEFS = `<linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" style="stop-color:var(--m1)"/><stop offset="45%" style="stop-color:var(--m2)"/><stop offset="100%" style="stop-color:var(--m3)"/>
    </linearGradient>
    <filter id="glow" x="-60%" y="-160%" width="220%" height="420%">
      <feGaussianBlur stdDeviation="1.418"/>
    </filter>`;

/**
 * The mark as a positioned <g>. The two crossing elements are real <path>s:
 * pathLength is a property of the path and is not carried through <use>, so a
 * <use> here would silently flatten the crossing.
 */
function markGroup({ cx, cy, width, animate = false }) {
  const scale = width / 56;
  const { pathLength, dasharray, dashoffset } = CROSSING;
  const trail = animate
    ? `\n    <path class="trail" d="${MARK}" fill="none" style="stroke:var(--m3)" stroke-width="${STROKE * 0.55}"
          stroke-linecap="round" pathLength="300" stroke-dasharray="26 274"/>`
    : '';
  return `<g transform="translate(${cx} ${cy}) scale(${scale}) translate(-60 -32)">
    <g filter="url(#glow)" style="opacity:var(--glow)">
      <path d="${MARK}" fill="none" stroke="url(#flow)" stroke-width="${STROKE}" stroke-linecap="round"/>
    </g>
    <path d="${MARK}" fill="none" stroke="url(#flow)" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${MARK}" fill="none" style="stroke:var(--casing)" stroke-width="${(STROKE * 1.515).toFixed(3)}" stroke-linecap="butt"
          pathLength="${pathLength}" stroke-dasharray="${dasharray}" stroke-dashoffset="${dashoffset}"/>
    <path d="${MARK}" fill="none" stroke="url(#flow)" stroke-width="${STROKE}" stroke-linecap="round"
          pathLength="${pathLength}" stroke-dasharray="${dasharray}" stroke-dashoffset="${dashoffset}"/>${trail}
  </g>`;
}

const hair = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="1.5" style="fill:var(--hair)"/>`;

// ── The hero ────────────────────────────────────────────────────────────────
// One focal point: the mark and the lockup share an optical centre band, and
// the edges are left to breathe.
function hero(copy) {
  const W = 1600;
  const H = 470;
  const g = ground(W, H, 19);
  const motion = `
    .trail { animation: flow 11s linear infinite; }
    @keyframes flow { from { stroke-dashoffset: 0 } to { stroke-dashoffset: -300 } }
    @media (prefers-reduced-motion: reduce) { .trail { animation: none; opacity: 0 } }`;

  return `${open(W, H, `Mnemosyne OS. ${copy.line1} ${copy.line2}`, motion)}
  <defs>
    ${g.defs}
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" style="stop-color:var(--accent);stop-opacity:0.6"/>
      <stop offset="100%" style="stop-color:var(--accent);stop-opacity:0"/>
    </linearGradient>
    ${MARK_DEFS}
  </defs>
  ${g.fill}
  <g style="stroke:var(--m2);fill:var(--m2);opacity:var(--stars)" transform="translate(90 -6)">
    <g stroke-width="1" fill="none"><path d="M1268 118 L1352 76 M1352 76 L1436 132 M1436 132 L1372 214 M1372 214 L1268 118 M1436 132 L1500 200 M1372 214 L1424 296"/></g>
    <g stroke="none"><circle cx="1268" cy="118" r="3"/><circle cx="1352" cy="76" r="2.2"/><circle cx="1436" cy="132" r="3.4"/><circle cx="1372" cy="214" r="2.6"/><circle cx="1500" cy="200" r="2"/><circle cx="1424" cy="296" r="2.4"/></g>
  </g>
  ${hair(0, H - 1.5, W)}
  ${markGroup({ cx: 310, cy: 235, width: 160, animate: true })}
  <g font-family="${SANS}">
    <text x="440" y="152" style="fill:var(--ink)" font-size="60" font-weight="600" letter-spacing="9">${esc(copy.wordmark)}</text>
    <rect x="444" y="180" width="340" height="1" fill="url(#rule)"/>
    <text x="444" y="218" style="fill:var(--kicker)" font-family="${MONO}" font-size="24" font-weight="600" letter-spacing="6">${esc(copy.kicker)}</text>
    <text x="440" y="300" style="fill:var(--ink)" font-size="42" font-weight="600">${esc(copy.line1)}</text>
    <text x="440" y="352" style="fill:var(--accent)" font-size="42" font-weight="600">${esc(copy.line2)}</text>
    <text x="444" y="404" style="fill:var(--dim)" font-size="26">${esc(copy.sub)}</text>
  </g>
</svg>
`;
}

// ── The fact strip ──────────────────────────────────────────────────────────
// Value over label, centred per column, columns split by hairlines: the shell's
// list idiom rather than a table.
function strip(copy) {
  const W = 1600;
  const H = 260;
  const X0 = 200;
  const X1 = 1560;
  const cells = copy.cells;
  const cellW = (X1 - X0) / cells.length;
  const g = ground(W, H, 7);
  const columns = cells
    .map((cell, i) => {
      const cx = (X0 + cellW * (i + 0.5)).toFixed(1);
      const [l1, l2] = Array.isArray(cell.label) ? cell.label : balance(cell.label);
      const sep =
        i === 0
          ? ''
          : `<rect x="${(X0 + cellW * i).toFixed(1)}" y="58" width="1" height="146" style="fill:var(--hair)"/>`;
      return `${sep}
    <text x="${cx}" y="128" text-anchor="middle" style="fill:var(--ink)" font-size="36" font-weight="600" letter-spacing="1.5">${esc(cell.value)}</text>
    <text x="${cx}" y="172" text-anchor="middle" style="fill:var(--dim)" font-size="22">${esc(l1)}</text>
    <text x="${cx}" y="202" text-anchor="middle" style="fill:var(--dim)" font-size="22">${esc(l2)}</text>`;
    })
    .join('\n');

  const alt = cells
    .map((c) => `${c.value}: ${Array.isArray(c.label) ? c.label.join(' ') : c.label}`)
    .join('. ');

  return `${open(W, H, alt)}
  <defs>${g.defs}${MARK_DEFS}</defs>
  ${g.fill}
  ${hair(0, 0, W)}
  ${hair(0, H - 1.5, W)}
  ${markGroup({ cx: 112, cy: H / 2, width: 100 })}
  <g font-family="${SANS}">
${columns}
  </g>
</svg>
`;
}

// ── Section bands ───────────────────────────────────────────────────────────
// Left-anchored title, right-anchored meta. Nothing is centred against a
// measured string, so a font substitution only moves the gap between them.
function band(copy) {
  const W = 1600;
  const H = 160;
  const g = ground(W, H, 7);
  return `${open(W, H, `${copy.index}. ${copy.title}, ${copy.meta}`)}
  <defs>${g.defs}${MARK_DEFS}</defs>
  ${g.fill}
  ${hair(0, 0, W)}
  ${hair(0, H - 1.5, W)}
  ${markGroup({ cx: 116, cy: H / 2, width: 84 })}
  <text x="204" y="64" style="fill:var(--accent)" font-family="${MONO}" font-size="22" font-weight="600" letter-spacing="4">${esc(copy.index)}</text>
  <text x="204" y="120" style="fill:var(--ink)" font-family="${SANS}" font-size="48" font-weight="600" letter-spacing="3">${esc(copy.title)}</text>
  <text x="1520" y="114" text-anchor="end" style="fill:var(--dim)" font-family="${MONO}" font-size="26">${esc(copy.meta)}</text>
</svg>
`;
}

// ── The closer ──────────────────────────────────────────────────────────────
// The tenet, centred under the mark. One idea, and nothing else on the band.
function closer(copy) {
  const W = 1600;
  const H = 230;
  const g = ground(W, H, 50);
  return `${open(W, H, copy.line)}
  <defs>${g.defs}${MARK_DEFS}</defs>
  ${g.fill}
  ${hair(0, 0, W)}
  ${markGroup({ cx: W / 2, cy: 84, width: 104 })}
  <text x="${W / 2}" y="178" text-anchor="middle" style="fill:var(--ink)" font-family="${SANS}" font-size="32">${esc(copy.line)}</text>
</svg>
`;
}

// ── Cartridge cards ─────────────────────────────────────────────────────────
/** Line art in a 64x64 box centred on (0,0). Primitives only: these have to read at 200px wide. */
function sigil(kind) {
  const s = `fill="none" style="stroke:var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
  switch (kind) {
    case 'spark':
      return `<path d="M0 -30 L7 -7 L30 0 L7 7 L0 30 L-7 7 L-30 0 L-7 -7 Z" style="fill:var(--accent)" stroke="none"/>`;
    case 'pages':
      return `<g ${s}><rect x="-26" y="-24" width="40" height="30" rx="2"/><rect x="-18" y="-14" width="40" height="30" rx="2"/><rect x="-10" y="-4" width="40" height="30" rx="2"/></g>`;
    case 'constellation':
      return `<g ${s}><path d="M-24 12 L-4 -20 L24 -6 M-4 -20 L10 20 M-24 12 L10 20"/><circle cx="-24" cy="12" r="5"/><circle cx="-4" cy="-20" r="5"/><circle cx="24" cy="-6" r="5"/><circle cx="10" cy="20" r="5"/></g>`;
    case 'plate':
      return `<g ${s}><circle cx="0" cy="0" r="24"/><circle cx="0" cy="0" r="11"/><path d="M-30 -26 L-30 -6 M30 -26 L30 -6"/></g>`;
    case 'house':
      return `<g ${s}><path d="M-26 -2 L0 -26 L26 -2"/><path d="M-18 -2 L-18 26 L18 26 L18 -2"/><path d="M-5 26 L-5 8 L5 8 L5 26"/></g>`;
    case 'glyphs':
      return `<g ${s}><rect x="-28" y="-24" width="34" height="28" rx="4"/><rect x="-6" y="-4" width="34" height="28" rx="4"/></g>`;
    case 'grid':
      return `<g ${s}><rect x="-26" y="-26" width="22" height="22" rx="2"/><rect x="4" y="-26" width="22" height="22" rx="2"/><rect x="-26" y="4" width="22" height="22" rx="2"/><rect x="4" y="4" width="22" height="22" rx="2"/></g>`;
    // Ariadne's thread: the way into the labyrinth, and the way back out.
    case 'labyrinth':
      return `<g ${s}><path d="M0 28 L-26 28 L-26 -26 L26 -26 L26 18 L-16 18 L-16 -16 L16 -16 L16 8 L-6 8 L-6 -6 L6 -6"/></g>`;
    // A cockpit reads as a dial: the thing you watch while something else works.
    case 'gauge':
      return `<g ${s}><path d="M-28 14 A 28 28 0 0 1 28 14"/><path d="M-20 -6 L-24 -10 M0 -14 L0 -20 M20 -6 L24 -10"/><path d="M0 14 L14 -8"/><circle cx="0" cy="14" r="4.5"/></g>`;
    case 'plus':
      return `<g ${s}><circle cx="0" cy="0" r="25" stroke-dasharray="7 6"/><path d="M0 -12 L0 12 M-12 0 L12 0"/></g>`;
    default:
      return '';
  }
}

/** Split a role line into two balanced lines at a word boundary. */
function balance(text) {
  const words = text.split(' ');
  if (words.length < 3) return [text, ''];
  let best = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i += 1) {
    const diff = Math.abs(words.slice(0, i).join(' ').length - words.slice(i).join(' ').length);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  }
  return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
}

function card(copy) {
  const W = 400;
  const H = 300;
  const [l1, l2] = balance(copy.role);
  const g = ground(W, H, 50);
  const edge = copy.cta
    ? `style="fill:var(--panel);stroke:var(--accent)" stroke-width="2" stroke-dasharray="9 7"`
    : `style="fill:var(--panel);stroke:var(--edge)" stroke-width="1.5"`;

  return `${open(W, H, `${copy.name}: ${copy.role}`)}
  <defs>${g.defs}</defs>
  ${g.fill}
  <rect x="4" y="4" width="${W - 12}" height="${H - 12}" rx="6" ${edge}/>
  <g transform="translate(${W / 2} 110) scale(1.4)">${sigil(copy.sigil)}</g>
  <text x="${W / 2}" y="212" text-anchor="middle" style="fill:var(--ink)" font-family="${SANS}" font-size="34" font-weight="600">${esc(copy.name)}</text>
  <text x="${W / 2}" y="250" text-anchor="middle" style="fill:var(--dim)" font-family="${SANS}" font-size="22">${esc(l1)}</text>
  <text x="${W / 2}" y="278" text-anchor="middle" style="fill:var(--dim)" font-family="${SANS}" font-size="22">${esc(l2)}</text>
</svg>
`;
}

// ── Emit ────────────────────────────────────────────────────────────────────
const config = JSON.parse(readFileSync(join(HERE, 'art.config.json'), 'utf8'));
mkdirSync(OUT_DIR, { recursive: true });

const pieces = [
  ['hero', hero, config.hero],
  ['strip-numbers', strip, config.strip],
  ['closer', closer, config.closer],
  ...config.bands.map((b) => [b.file, band, b]),
  ...config.cards.map((c) => [c.file, card, c]),
];

for (const [file, render, copy] of pieces) {
  writeFileSync(join(OUT_DIR, `${file}.svg`), render(copy), 'utf8');
}
console.log(`gen-art: wrote ${pieces.length} files to profile/assets/gen/`);
