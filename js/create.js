import { drawPattern, drawClockOverlay, exportWallpaper, registerPalette, PALETTES, PATTERNS, PATTERN_LABELS, DESKTOP_W, DESKTOP_H, MOBILE_W, MOBILE_H } from './engine.js?v=11';

let currentPattern = 0;
let currentPalette = 0;
let seed = Math.random() * 10000 | 0;
let inverted = false;
let currentScale = 1.0;
let currentComplexity = 1.0;

const inputSeed = document.getElementById('inputSeed');
const sliderSeed = document.getElementById('sliderSeed');
const sliderScale = document.getElementById('sliderScale');
const labelScale = document.getElementById('labelScale');
const sliderComplexity = document.getElementById('sliderComplexity');
const labelComplexity = document.getElementById('labelComplexity');
const btnMixPalette = document.getElementById('btnMixPalette');

// Set initial slider & inputs values
inputSeed.value = seed;
sliderSeed.value = seed % 10000;

let dCache = document.createElement('canvas');
let mCache = document.createElement('canvas');
let dCacheValid = false;
let mCacheValid = false;

function renderBackground() {
  const dPR = window.devicePixelRatio || 2;
  const dWidth = 640;
  const dHeight = 360;
  const mWidth = 320;
  const mHeight = 693;

  dCache.width = dWidth * dPR;
  dCache.height = dHeight * dPR;
  mCache.width = mWidth * dPR;
  mCache.height = mHeight * dPR;

  const dCtx = dCache.getContext('2d');
  const mCtx = mCache.getContext('2d');

  dCtx.scale(dPR, dPR);
  mCtx.scale(dPR, dPR);

  drawPattern(dCtx, dWidth, dHeight, currentPattern, currentPalette, seed, inverted, currentScale, currentComplexity);
  drawPattern(mCtx, mWidth, mHeight, currentPattern, currentPalette, seed, inverted, currentScale, currentComplexity);

  dCacheValid = true;
  mCacheValid = true;
}

function updateClock() {
  if (!dCacheValid || !mCacheValid) {
    renderBackground();
  }

  const dCanvas = document.getElementById('previewDesktop');
  const mCanvas = document.getElementById('previewMobile');
  if (!dCanvas || !mCanvas) return;

  const dPR = window.devicePixelRatio || 2;
  const dWidth = 640;
  const dHeight = 360;
  const mWidth = 320;
  const mHeight = 693;

  dCanvas.width = dWidth * dPR;
  dCanvas.height = dHeight * dPR;
  mCanvas.width = mWidth * dPR;
  mCanvas.height = mHeight * dPR;

  const dCtx = dCanvas.getContext('2d');
  const mCtx = mCanvas.getContext('2d');

  dCtx.scale(dPR, dPR);
  mCtx.scale(dPR, dPR);

  // Draw the pre-rendered pattern background
  dCtx.drawImage(dCache, 0, 0, dWidth, dHeight);
  mCtx.drawImage(mCache, 0, 0, mWidth, mHeight);

  // Draw clock overlay
  drawClockOverlay(dCtx, dWidth, dHeight, 'desktop', currentPalette, inverted);
  drawClockOverlay(mCtx, mWidth, mHeight, 'mobile', currentPalette, inverted);
}

function render() {
  dCacheValid = false;
  mCacheValid = false;
  updateClock();
}

// Update clock text every 10 seconds
setInterval(updateClock, 10000);

// Pattern grid
const grid = document.getElementById('styleGrid');
PATTERNS.forEach((_, i) => {
  const btn = document.createElement('button');
  btn.className = 'style-btn' + (i === currentPattern ? ' active' : '');
  btn.title = PATTERN_LABELS[i];
  const c = document.createElement('canvas');
  c.width = 120;
  c.height = 75;
  btn.appendChild(c);
  grid.appendChild(btn);
  
  // Stagger rendering to prevent blocking creator page load
  setTimeout(() => {
    drawPattern(c.getContext('2d'), 120, 75, i, 0, 42, false, 1.0, 1.0);
  }, i * 15);

  btn.onclick = () => {
    currentPattern = i;
    grid.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  };
});

// Palette row renderer
const row = document.getElementById('paletteRow');
function addPaletteSwatch(pal, i) {
  const swatch = document.createElement('button');
  swatch.className = 'palette-swatch' + (i === currentPalette ? ' active' : '');
  swatch.title = pal.name;
  const c1 = pal.colors[0];
  const c2 = pal.colors[Math.floor(pal.colors.length / 2)];
  const c3 = pal.colors[pal.colors.length - 1];
  swatch.style.background = `linear-gradient(to right, ${c1} 33%, ${c2} 33%, ${c2} 67%, ${c3} 67%)`;
  row.appendChild(swatch);
  swatch.onclick = () => {
    currentPalette = i;
    row.querySelectorAll('.palette-swatch').forEach(b => b.classList.remove('active'));
    swatch.classList.add('active');
    render();
  };
}

PALETTES.forEach((pal, i) => {
  addPaletteSwatch(pal, i);
});

// HSL to Hex helper for custom mixer
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0, g = 0, b = 0;
  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
  const toHex = val => {
    const hex = Math.round((val + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function generateCustomPalette() {
  const baseHue = Math.random() * 360;
  const isAnalogous = Math.random() > 0.5;
  const colors = [];
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    let h, s, l;
    if (isAnalogous) {
      h = (baseHue + t * 60 - 30 + 360) % 360;
      s = 65 + t * 25; 
      l = 15 + t * 70;
    } else {
      h = (baseHue + (t > 0.5 ? 180 : 0) + 360) % 360;
      s = 55 + t * 35;
      l = 15 + t * 70;
    }
    colors.push(hslToHex(h, s, l));
  }
  return { name: `Custom Mix`, colors };
}

// Mix Palette action
btnMixPalette.onclick = () => {
  const customPal = generateCustomPalette();
  const newIndex = registerPalette(customPal.name, customPal.colors);
  addPaletteSwatch(customPal, newIndex);
  // Select it
  currentPalette = newIndex;
  row.querySelectorAll('.palette-swatch').forEach(b => b.classList.remove('active'));
  row.lastElementChild.classList.add('active');
  render();
};

// Seed event bindings
function updateSeed(val) {
  seed = parseInt(val) || 0;
  inputSeed.value = seed;
  sliderSeed.value = seed % 10000;
  render();
}

inputSeed.oninput = (e) => updateSeed(e.target.value);
sliderSeed.oninput = (e) => updateSeed(e.target.value);

// Scale event bindings
sliderScale.oninput = (e) => {
  currentScale = parseFloat(e.target.value);
  labelScale.textContent = currentScale.toFixed(1) + 'x';
  render();
};

// Complexity event bindings
sliderComplexity.oninput = (e) => {
  currentComplexity = parseFloat(e.target.value);
  labelComplexity.textContent = currentComplexity.toFixed(1) + 'x';
  render();
};

// Mode toggle
document.getElementById('btnDark').onclick = () => {
  inverted = false;
  document.getElementById('btnDark').classList.add('active');
  document.getElementById('btnLight').classList.remove('active');
  render();
};

document.getElementById('btnLight').onclick = () => {
  inverted = true;
  document.getElementById('btnLight').classList.add('active');
  document.getElementById('btnDark').classList.remove('active');
  render();
};

// Shuffle
document.getElementById('btnShuffle').onclick = () => {
  seed = Math.random() * 100000 | 0;
  inputSeed.value = seed;
  sliderSeed.value = seed % 10000;
  render();
};

// Download
document.getElementById('btnDesktop').onclick = () => {
  exportWallpaper(DESKTOP_W, DESKTOP_H, currentPattern, currentPalette, seed, inverted, 'wllpr-desktop-4k.png', currentScale, currentComplexity);
};

document.getElementById('btnMobile').onclick = () => {
  exportWallpaper(MOBILE_W, MOBILE_H, currentPattern, currentPalette, seed, inverted, 'wllpr-iphone.png', currentScale, currentComplexity);
};

// Apply as wallpaper
document.getElementById('btnApply').addEventListener('click', async () => {
  try {
    if (!window.__TAURI__) {
      alert('Feature available only in the desktop application.');
      return;
    }
    const btn = document.getElementById('btnApply');
    btn.textContent = 'Applying...';
    btn.disabled = true;

    const c = document.createElement('canvas');
    c.width = DESKTOP_W;
    c.height = DESKTOP_H;
    drawPattern(c.getContext('2d'), DESKTOP_W, DESKTOP_H, currentPattern, currentPalette, seed, inverted, currentScale, currentComplexity);
    const blob = await new Promise(resolve => c.toBlob(resolve, 'image/png'));
    const arrayBuffer = await blob.arrayBuffer();
    const bytes = Array.from(new Uint8Array(arrayBuffer));
    await window.__TAURI__.core.invoke('set_wallpaper', {
      bytes,
      filename: `wllpr-custom-${seed}.png`,
    });

    await new Promise(r => setTimeout(r, 5000));
    btn.textContent = 'Applied!';
    setTimeout(() => {
      btn.textContent = 'Set Wallpaper';
      btn.disabled = false;
    }, 2000);
  } catch (err) {
    alert('Error: ' + err);
    const btn = document.getElementById('btnApply');
    btn.textContent = 'Set Wallpaper';
    btn.disabled = false;
  }
});

render();
