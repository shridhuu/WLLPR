const DESKTOP_W = 3840, DESKTOP_H = 2160;
const MOBILE_W = 1290, MOBILE_H = 2796;

const PALETTES = [
  { name: 'Charcoal', colors: ['#000000','#141414','#2a2a2a','#404040','#595959','#737373','#8c8c8c','#b3b3b3','#d9d9d9','#ffffff'] },
  { name: 'Stone',    colors: ['#1a1714','#2c2825','#3e3a35','#534e47','#6b655c','#857d72','#9f9688','#b8b0a3','#d1c9bd','#ece6dc'] },
  { name: 'Blue',     colors: ['#01052b','#04137a','#0825c7','#0d39ff','#1552ff','#2f73ff','#58a3ff','#7dc3ff','#aedfff','#edf8ff'] },
  { name: 'Sunrise',  colors: ['#031c35','#05284a','#063862','#0b4b7a','#ff5b40','#ff7240','#ff9438','#ffb33f','#ffd064','#fff0c8'] },
  { name: 'Fire',     colors: ['#1a0000','#450000','#7a0000','#b30000','#e63900','#ff6a00','#ff9500','#ffb700','#ffd166','#fff1c2'] },
  { name: 'Purple',   colors: ['#100014','#22002e','#3f005a','#5c0085','#7a00b3','#9b1fff','#b84dff','#cf88ff','#e4c2ff','#f7ebff'] },
  { name: 'Toxic Glow', colors: ['#050807','#0c1410','#14221a','#1e3325','#2a4d2e','#3f6b2f','#5f8a2c','#86b326','#b9e83f','#f6ffe0'] },
  { name: 'Arctic Winter', colors: ['#081018','#112131','#1d3348','#33516a','#55768f','#7d9eb5','#a7c2d3','#cfe0ea','#e8f0f5','#ffffff']},
  { name: 'Neon Horizon', colors: ['#13051a','#290d3a','#3c1259','#3b2285','#2b42b0','#1d6cd4','#2ca1e8','#59cef2','#94f2f7','#e0fbfd'] },
  { name: 'Solar Flare', colors: ['#1f0505','#3a0d0d','#611111','#871c26','#ab3037','#cb4f41','#e6744a','#f79d5c','#fcc579','#fdf2a6'] },
  { name: 'Deep Forest', colors: ['#051214','#0b2426','#123a39','#18524c','#226b5d','#32856c','#49a07a','#68ba89','#91d49d','#c3ebd0'] },
  { name: 'Cosmic Blush Nebula', colors: ['#120414','#260824','#3f0f3d','#5c1a5c','#7a2a7a','#a33a86','#c85b98','#e98fb6','#ffd0dd','#fff1f6'] },
  { name: 'Ocean Depths', colors: ['#020c1b','#0a1628','#0f2847','#0d3b6e','#0e5a8a','#1a7fa0','#30a5b8','#5eccc5','#96ead8','#d4fff2'] },
  { name: 'Blood Moon', colors: ['#000000','#0f0000','#1f0000','#330000','#4d0000','#6b0000','#880000','#a50000','#c40000','#e60000'] },
  { name: 'Sunset Dream', colors: ['#150020', '#30003a', '#540d4e', '#7c1c58', '#a42c5a', '#cc3f54', '#eb5749', '#ff783b', '#ff9f3b', '#ffe185'] },
  { name: 'Emerald Aurora', colors: ['#020d1a', '#051e2e', '#0b3543', '#124f54', '#1b6d61', '#288c69', '#3ab06d', '#55d46c', '#7ff76b', '#e2ffd6'] },
  { name: 'Cyberpunk Grid', colors: ['#0b001a', '#1a003a', '#2e005c', '#48007e', '#6d00a1', '#9a00c4', '#c61ad9', '#e04ce8', '#63e9f4', '#fffb96'] },
  { name: 'Desert Sands', colors: ['#1f1105', '#38200d', '#543217', '#734623', '#945c32', '#b57444', '#cc8c58', '#e0aa75', '#f0ca9c', '#fbf3e6'] },
  { name: 'Lavender Dream', colors: ['#1e1420', '#322237', '#4a3350', '#674a6b', '#89678b', '#ad8bb0', '#cfaed2', '#eccff0', '#f6e4f9', '#fcf6fd'] },
  { name: 'Midnight Gold', colors: ['#02050d', '#080d1a', '#12182b', '#202640', '#353a5c', '#544c68', '#7b6069', '#a67d68', '#d19f6a', '#ffc875'] },
  { name: 'Mint Chocolate', colors: ['#140b05', '#29180d', '#402717', '#5c3a23', '#7a5133', '#946c4b', '#ac8868', '#c4a689', '#d8cbb5', '#e8f7ec'] },
  { name: 'Cherry Blossom', colors: ['#14020a', '#2b0618', '#470d28', '#66193d', '#872a54', '#a8416d', '#c76089', '#e084a7', '#f2adca', '#fde8f0'] },
  { name: 'Volcanic Ash', colors: ['#0f0d0d', '#221e1e', '#3b3434', '#574d4d', '#786b6b', '#9e3a2b', '#c24b2b', '#e06534', '#f5874c', '#ffb075'] },
  { name: 'Electric Indigo', colors: ['#05001f', '#0c0042', '#18006e', '#2c009c', '#4a00cc', '#6f14f5', '#4966ff', '#5cb3ff', '#94e8ff', '#e0ffff'] },
  { name: 'Pastel Dreams', colors: ['#0f0d1b','#241b35','#402b5c','#633d8c','#9155c2','#bd78eb','#d19eff','#e6c5ff','#f2e0ff','#f9f2ff'] },
  { name: 'Golden Hour', colors: ['#1c0a00','#361500','#572300','#7d3600','#a84f00','#cc6c00','#eb8d24','#ffb359','#ffd79e','#fff4e0'] },
  { name: 'Nordic Moss', colors: ['#070d0a','#121e17','#203328','#324d3d','#476b56','#628c74','#83ad96','#a7cfbb','#cde6da','#eff7f3'] },
  { name: 'Retro Synth', colors: ['#0d021c','#1e0638','#330c57','#4f177c','#7526a7','#a13ed6','#cf5eff','#f594ff','#ffd0ff','#fff2ff'] },
  { name: 'Cyberpunk Red', colors: ['#120108','#290315','#420625','#610d3a','#851852','#ad276f','#d43f8d','#f75eb0','#ffa3d7','#fff0f8'] },
  { name: 'Holographic', colors: ['#0c1529','#172747','#263b6b','#3b5394','#5973c2','#809bf2','#acc1ff','#d6e2ff','#edf2ff','#ffffff'] },
  { name: 'Sherbet Sunset', colors: ['#240518','#400e2b','#611942','#852a5c','#ab3f7a','#d15c9a','#f07ebc','#ffa3d7','#ffd1ed','#fff5fa'] },
  { name: 'Miami Vice', colors: ['#04151f','#0a283b','#11415c','#1a5d82','#2a7da3','#439fc7','#6bc2e8','#9ee3ff','#d0f4ff','#f2fcff'] },
  { name: 'Cotton Candy', colors: ['#100d2b','#201540','#3a1c59','#5c2273','#88298c','#bd3aa3','#eb58be','#ffa3df','#ffe2fa','#fff5fd'] },
  { name: 'Emerald Sea', colors: ['#03120e','#09241b','#113a2a','#1a523b','#266b4e','#368562','#4ca079','#6cbba9','#9cd4ca','#e0f7f4'] },
];

const PATTERNS = [
  'flowing-hills', 'smooth-wave', 'sand-dunes', 'mountains', 'concentric-arcs', 'desert-dunes', 'crystal-peaks', 'cosmic-constellations',
  'big-sur-waves', 'monterey-silk', 'ventura-petals', 'sonoma-topography', 'mesh-gradient', 'iridescent-bubbles', 'light-beams', 'origami-crystal', 'minimalist-abstract',
  'aurora-lights', 'cyber-grid', 'liquid-marble'
];
const PATTERN_LABELS = [
  'Hills', 'Waves', 'Dunes', 'Mountains', 'Arcs', 'Scribbles', 'Crystal Peaks', 'Space Constellations',
  'Big Sur Waves', 'Monterey Silk', 'Ventura Petals', 'Sonoma Topo', 'Mesh Gradient', 'Glass Bubbles', 'Light Beams', 'Origami Crystal', 'Minimalist Lines',
  'Aurora Lights', 'Cyber Grid', 'Liquid Marble'
];

let _seed = 0;

function mulberry32(a) {
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    var t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function noise(x) {
  const ix = Math.floor(x);
  const fx = x - ix;
  const t = fx * fx * (3 - 2 * fx);
  const seedA = Math.sin(ix * 127.1 + _seed * 0.01) * 43758.5453;
  const seedB = Math.sin((ix + 1) * 127.1 + _seed * 0.01) * 43758.5453;
  const a = seedA - Math.floor(seedA);
  const b = seedB - Math.floor(seedB);
  return a + (b - a) * t;
}

function fbm(x, octaves = 4) {
  let val = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < octaves; i++) {
    val += amp * noise(x * freq);
    amp *= 0.5;
    freq *= 2.1;
  }
  return val;
}

function lerpColor(c1, c2, t) {
  const r1 = parseInt(c1.slice(1,3),16), g1 = parseInt(c1.slice(3,5),16), b1 = parseInt(c1.slice(5,7),16);
  const r2 = parseInt(c2.slice(1,3),16), g2 = parseInt(c2.slice(3,5),16), b2 = parseInt(c2.slice(5,7),16);
  return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`;
}

function getColor(palette, t, inv) {
  const colors = PALETTES[palette].colors;
  let ct = inv ? 1 - t : t;
  if (!inv) {
    ct = 0.15 + ct * 0.85;
  }
  const idx = ct * (colors.length - 1);
  const i = Math.floor(idx);
  const f = idx - i;
  if (i >= colors.length - 1) return colors[colors.length - 1];
  if (i < 0) return colors[0];
  return lerpColor(colors[i], colors[i+1], f);
}

function getBgColor(palette, inv) {
  const colors = PALETTES[palette].colors;
  return inv ? colors[colors.length - 1] : colors[1];
}

function drawPineTree(ctx, x, bottomY, width, height, rng) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x - width * 0.08, bottomY);
  ctx.lineTo(x - width * 0.08, bottomY - height * 0.15);
  ctx.lineTo(x + width * 0.08, bottomY - height * 0.15);
  ctx.lineTo(x + width * 0.08, bottomY);
  ctx.fill();

  const segments = 30;
  for (let i = 0; i < segments; i++) {
    const t = i / (segments - 1);
    const segHeight = height * 1;
    const topY = bottomY - height + (segHeight * t * 0.45);
    const currBottomY = bottomY - height + (segHeight * (t + 0.22));
    const currWidth = width * (0.25 + t * 0.75);
    ctx.beginPath();
    ctx.moveTo(x, topY);
    const jitterL = (rng() - 0.5) * (width * 0.08);
    const jitterR = (rng() - 0.5) * (width * 0.08);
    ctx.lineTo(x - currWidth / 2 + jitterL, currBottomY);
    ctx.lineTo(x + currWidth / 2 + jitterR, currBottomY);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawFlowingHills(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(2, Math.round(5 * complexity));
  const isDesktop = w > h;
  for (let i = 0; i < layers; i++) {
    const t = (i + 1) / layers;
    const spacingFactor = (isDesktop ? 0.40 : 0.33) * scale;
    const baseY = h * (0.5 + (i / layers) * spacingFactor);
    ctx.fillStyle = getColor(pal, t * 0.85 + 0.1, inv);
    ctx.beginPath();
    ctx.moveTo(0, h);
    let ridgePoints = [];
    const geometryStep = Math.max(4, Math.round(w / 120));
    for (let x = 0; x <= w + geometryStep; x += geometryStep) {
      const nx = x / w;
      let y;
      if (i < 2) {
        const mountainAmplitude = (isDesktop ? 0.32 : 0.12) * scale;
        const mountainFreq = (isDesktop ? 4.5 : 2.5) / scale;
        y = baseY + fbm(nx * mountainFreq + i * 4.5, 10) * h * mountainAmplitude - (isDesktop ? h * 0.12 : h * 0.05);
      } else {
        const hillAmplitude = (isDesktop ? 0.16 : 0.06) * scale;
        const hillFreq = (isDesktop ? 2.5 : 1.5) / scale;
        y = baseY + fbm(nx * hillFreq + i * 2.1, 8) * h * hillAmplitude - (isDesktop ? h * 0.01 : h * 0.02);
      }
      ridgePoints.push({ x, y });
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    if (i >= 1) {
      ctx.fillStyle = getColor(pal, Math.max(0.0, Math.min(1.0, (t * 0.85 + 0.1) + (inv ? -0.12 : 0.08))), inv);
      let baseTreeWidth, baseTreeHeight;
      if (isDesktop) {
        baseTreeWidth = h * (0.045 + i * 0.004) * scale;
        baseTreeHeight = baseTreeWidth * (1 + rng() * 0.2);
      } else {
        baseTreeWidth = w * (0.12 + i * 0.004) * scale;
        baseTreeHeight = baseTreeWidth * (1 + rng() * 0.2);
      }
      const stepX = baseTreeWidth * 0.35;
      for (let x = 0; x <= w; x += stepX) {
        const pct = x / w;
        const ptIndex = Math.floor(pct * (ridgePoints.length - 1));
        const pt = ridgePoints[ptIndex] || ridgePoints[ridgePoints.length - 1];
        const rowsDown = isDesktop
          ? (i === 1 ? 3 : 5 + (layers - i))
          : (i === 1 ? 1 : 2 + (layers - i));
        for (let row = 0; row < rowsDown; row++) {
          const yOffset = row * (baseTreeHeight * 0.22);
          const currentBottomY = pt.y + yOffset;
          if (currentBottomY > h + 20) continue;
          const scaleVal = isDesktop ? (0.65 + rng() * 1.1) : (0.8 + rng() * 0.4);
          const currentWidth = baseTreeWidth * (isDesktop ? Math.min(scaleVal, 1.1) : scaleVal);
          const currentHeight = baseTreeHeight * scaleVal;
          const currentX = x + (rng() - 0.5) * (stepX * 0.5);
          drawPineTree(ctx, currentX, currentBottomY, currentWidth, currentHeight, rng);
        }
      }
    }
  }
}

function drawSmoothWave(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(3, Math.round((8 + (rng() * 5 | 0)) * complexity));
  const centerX = w * (0.45 + rng() * 0.1);
  const baseY = h * (0.75 + rng() * 0.08);
  for (let i = layers; i >= 0; i--) {
    const t = i / layers;
    const spread = h * (0.8 + t * 1.8) * scale;
    const peakH = h * (0.05 + t * 0.3) * scale;
    const skew = rng() * 0.2 - 0.10;
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, baseY + peakH * 0.5);
    const steps = 120;
    for (let s = 0; s <= steps; s++) {
      const st = s / steps;
      const x = st * w;
      const dist = (x - centerX) / spread;
      const bell = Math.exp(-dist * dist * 0.4);
      const asymmetry = 1 + skew * dist;
      const wave = bell * peakH * asymmetry;
      const micro = fbm((x / h) * 2 + i * 1.4, 3) * h * 0.008 * scale;
      const y = baseY - wave + micro;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = getColor(pal, 0.1 + (1 - t) * 0.8, inv);
    ctx.fill();
  }
}

function drawSandDunes(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(3, Math.round((7 + (rng() * 5 | 0)) * complexity));
  for (let i = 0; i < layers; i++) {
    const t = (i + 1) / layers;
    const baseY = h * (0.55 + t * 0.35);
    const freq = (0.5 + rng() * 0.8) / scale;
    const phase = rng() * 10;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const nx = x / h;
      const wave = Math.sin(nx * Math.PI * freq + phase) * h * 0.05 * scale;
      const n = fbm(nx * 0.8 + i * 2.1, 3) * h * 0.05 * scale;
      const y = baseY + wave + n;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = getColor(pal, t * 0.8 + 0.15, inv);
    ctx.fill();
  }
}

function drawMountains(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(2, Math.round((5 + (rng() * 3 | 0)) * complexity));
  for (let i = 0; i < layers; i++) {
    const t = (i + 1) / layers;
    const baseY = h * (0.55 + t * 0.35);
    const peakCount = Math.max(1, Math.round((2 + (rng() * 2 | 0)) * complexity));
    const offset = rng() * 50;
    ctx.beginPath();
    ctx.moveTo(-2, h + 2);
    const peaks = [];
    for (let p = 0; p < peakCount; p++) {
      peaks.push({
        cx: w * (0.1 + rng() * 0.8),
        peakH: h * (0.1 + rng() * 0.15) * (1 - i * 0.08) * scale,
        width: h * (0.6 + rng() * 0.6) * scale,
      });
    }
    for (let x = -2; x <= w + 2; x += 2) {
      let y = baseY;
      for (const p of peaks) {
        const dist = Math.abs(x - p.cx);
        if (dist < p.width) {
          const rise = (1 - dist / p.width);
          const sharpness = 1.3 + rng() * 0.3;
          const peakY = Math.pow(rise, sharpness) * p.peakH;
          y = Math.min(y, baseY - peakY);
        }
      }
      const micro = fbm((x / h) * 1.5 + i * 2.3 + offset, 3) * h * 0.008 * scale;
      ctx.lineTo(x, y + micro);
    }
    ctx.lineTo(w + 2, h + 2);
    ctx.closePath();
    ctx.fillStyle = getColor(pal, t * 0.8 + 0.12, inv);
    ctx.fill();
  }
}

function drawConcentricArcs(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const maxR = h * 1.0 * scale;
  const originX = w * (0.45 + rng() * 0.1);
  const originY = h * 1.5;
  const rings = Math.max(4, Math.round((14 + (rng() * 6 | 0)) * complexity));
  for (let i = rings; i >= 0; i--) {
    const t = i / rings;
    const r = maxR * t;
    ctx.beginPath();
    ctx.arc(originX, originY, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = getColor(pal, 0.1 + (1 - t) * 0.8, inv);
    ctx.fill();
  }
}

function drawDesertDunes(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(3, Math.round(15 * complexity));
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.beginPath();
    let x = w * rng(), y = h * (0.5 + rng() * 0.5);
    ctx.moveTo(x, y);
    for (let j = 0; j < 10; j++) {
      x += (rng() - 0.5) * w * 1 * scale;
      y += (rng() - 0.4) * h * 0.2 * scale;
      const cp1y = h * (0.5 + rng() * 0.5);
      const cp2y = h * (0.5 + rng() * 0.5);
      ctx.bezierCurveTo(w * rng(), cp1y, w * rng(), cp2y, x, y);
    }
    ctx.strokeStyle = getColor(pal, t, inv);
    ctx.lineWidth = Math.max(1, rng() * 3 * scale);
    ctx.stroke();
  }
}

function drawCrystalPeaks(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(2, Math.round(4 * complexity));
  for (let l = 0; l < layers; l++) {
    const t = (l + 1) / layers;
    const baseY = h * (0.6 + (l / layers) * 0.3);
    const shardCount = Math.max(3, Math.round((5 + l * 2) * complexity));
    const shardWidth = (w / shardCount) * 1.5 * scale;
    
    for (let s = 0; s < shardCount; s++) {
      const cx = (s / (shardCount - 1)) * w + (rng() - 0.5) * (w / shardCount);
      const peakH = h * (0.15 + rng() * 0.2) * (1 - l * 0.08) * scale;
      const topY = baseY - peakH;
      const leftX = cx - shardWidth / 2;
      const rightX = cx + shardWidth / 2;
      
      // Left face
      ctx.beginPath();
      ctx.moveTo(cx, topY);
      ctx.lineTo(leftX, baseY);
      ctx.lineTo(cx, baseY);
      ctx.closePath();
      ctx.fillStyle = getColor(pal, t * 0.7 + rng() * 0.1, inv);
      ctx.fill();
      
      // Right face
      ctx.beginPath();
      ctx.moveTo(cx, topY);
      ctx.lineTo(rightX, baseY);
      ctx.lineTo(cx, baseY);
      ctx.closePath();
      ctx.fillStyle = getColor(pal, Math.min(1.0, t * 0.75 + 0.15 + rng() * 0.1), inv);
      ctx.fill();
    }
  }
}

function drawCosmicConstellations(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  // 1. Draw nebulae (large soft radial gradients)
  const nebulaCount = Math.max(1, Math.round(3 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'screen';
  for (let n = 0; n < nebulaCount; n++) {
    const cx = w * rng();
    const cy = h * rng();
    const r = h * (0.2 + rng() * 0.3) * scale;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    const baseColor = getColor(pal, 0.2 + rng() * 0.6, inv);
    let rgb = baseColor;
    const opacity = inv ? 0.28 : 0.15;
    if (baseColor.startsWith('rgb')) {
      rgb = baseColor.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
    } else if (baseColor.startsWith('#')) {
      const rh = parseInt(baseColor.slice(1,3), 16);
      const gh = parseInt(baseColor.slice(3,5), 16);
      const bh = parseInt(baseColor.slice(5,7), 16);
      rgb = `rgba(${rh},${gh},${bh},${opacity})`;
    }
    grad.addColorStop(0, rgb);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  
  // 2. Generate star coordinates
  const starCount = Math.max(10, Math.round(60 * complexity));
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: w * rng(),
      y: h * rng(),
      size: (0.5 + rng() * 2) * scale,
      colorIdx: Math.floor(rng() * 4) + 6
    });
  }
  
  // 3. Draw constellation connection lines
  ctx.save();
  ctx.lineWidth = 0.4 * scale;
  const maxDist = h * 0.15 * scale;
  for (let i = 0; i < starCount; i++) {
    for (let j = i + 1; j < starCount; j++) {
      const dx = stars[i].x - stars[j].x;
      const dy = stars[i].y - stars[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * (inv ? 0.5 : 0.35);
        const c = getColor(pal, 0.5, inv);
        let rgba = c;
        if (c.startsWith('#')) {
          const rh = parseInt(c.slice(1,3), 16);
          const gh = parseInt(c.slice(3,5), 16);
          const bh = parseInt(c.slice(5,7), 16);
          rgba = `rgba(${rh},${gh},${bh},${alpha})`;
        }
        ctx.strokeStyle = rgba;
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }
  ctx.restore();
  
  // 4. Draw stars
  ctx.save();
  for (const star of stars) {
    ctx.fillStyle = getColor(pal, star.colorIdx / 9, inv);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    
    if (star.size > 1.8 * scale && rng() > 0.6) {
      ctx.strokeStyle = inv ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 0.5 * scale;
      ctx.beginPath();
      ctx.moveTo(star.x - star.size * 2, star.y);
      ctx.lineTo(star.x + star.size * 2, star.y);
      ctx.moveTo(star.x, star.y - star.size * 2);
      ctx.lineTo(star.x, star.y + star.size * 2);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawBigSurWaves(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(3, Math.round(6 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'source-over';
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.shadowColor = inv ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 30 * scale;
    ctx.shadowOffsetY = 10 * scale;
    
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * (0.2 + t * 0.4));
    
    const cp1x = w * 0.25;
    const cp1y = h * (0.1 + t * 0.5 + rng() * 0.2);
    const cp2x = w * 0.75;
    const cp2y = h * (0.3 + t * 0.3 - rng() * 0.2);
    const destX = w;
    const destY = h * (0.4 + t * 0.4);
    
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, destX, destY);
    ctx.lineTo(w, h);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, getColor(pal, t * 0.6, inv));
    grad.addColorStop(0.5, getColor(pal, Math.min(1.0, t * 0.6 + 0.2), inv));
    grad.addColorStop(1, getColor(pal, Math.min(1.0, t * 0.6 + 0.4), inv));
    
    ctx.fillStyle = grad;
    ctx.globalAlpha = inv ? 0.35 : 0.8;
    ctx.fill();
  }
  ctx.restore();
}

function drawMontereySilk(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(3, Math.round(5 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'source-over';
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.beginPath();
    const startY = h * (0.3 + t * 0.4);
    ctx.moveTo(-100, startY);
    
    const cp1x = w * 0.3;
    const cp1y = h * (0.1 + t * 0.8 + (rng() - 0.5) * 0.2);
    const cp2x = w * 0.7;
    const cp2y = h * (0.1 + (1 - t) * 0.8 + (rng() - 0.5) * 0.2);
    const destX = w + 100;
    const destY = h * (0.3 + (1 - t) * 0.4);
    
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, destX, destY);
    ctx.lineTo(w + 100, h + 100);
    ctx.lineTo(-100, h + 100);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(0, startY, w, destY);
    grad.addColorStop(0, getColor(pal, t * 0.5 + 0.1, inv));
    grad.addColorStop(1, getColor(pal, 1.0 - t * 0.4, inv));
    
    ctx.fillStyle = grad;
    ctx.shadowColor = inv ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.25)';
    ctx.shadowBlur = 50 * scale;
    ctx.shadowOffsetY = 15 * scale;
    ctx.globalAlpha = inv ? 0.35 : 1.0;
    ctx.fill();
  }
  ctx.restore();
}

function drawVenturaPetals(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(4, Math.round(8 * complexity));
  const cx = w / 2;
  const cy = h / 2;
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'source-over';
  for (let i = count; i > 0; i--) {
    const t = i / count;
    ctx.beginPath();
    const r = Math.min(w, h) * 0.45 * t * scale;
    
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
      const offset = (rng() - 0.5) * r * 0.2;
      const pr = r + offset;
      const px = cx + Math.cos(a) * pr;
      const py = cy + Math.sin(a) * pr;
      if (a === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    
    const grad = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
    grad.addColorStop(0, getColor(pal, (1 - t) * 0.8 + 0.1, inv));
    grad.addColorStop(1, getColor(pal, (1 - t) * 0.5, inv));
    
    ctx.fillStyle = grad;
    ctx.shadowColor = inv ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 20 * scale;
    ctx.globalAlpha = inv ? 0.45 : 1.0;
    ctx.fill();
  }
  ctx.restore();
}

function drawSonomaTopography(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const layers = Math.max(3, Math.round(7 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'source-over';
  for (let i = 0; i < layers; i++) {
    const t = (i + 1) / layers;
    const baseY = h * (0.3 + t * 0.6);
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, baseY);
    
    const steps = 100;
    for (let s = 0; s <= steps; s++) {
      const st = s / steps;
      const x = st * w;
      const n = fbm(st * 3 + i * 1.5, 4) * h * 0.15 * scale;
      const y = baseY + n;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(0, baseY - h * 0.1, 0, h);
    grad.addColorStop(0, getColor(pal, t * 0.8 + 0.1, inv));
    grad.addColorStop(1, getColor(pal, t * 0.5, inv));
    
    ctx.fillStyle = grad;
    ctx.shadowColor = inv ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 40 * scale;
    ctx.shadowOffsetY = -10 * scale;
    ctx.globalAlpha = inv ? 0.5 : 1.0;
    ctx.fill();
  }
  ctx.restore();
}

function drawMeshGradient(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const blobCount = Math.max(3, Math.round(5 * complexity));
  ctx.save();
  ctx.fillStyle = getBgColor(pal, inv);
  ctx.fillRect(0, 0, w, h);
  
  ctx.globalCompositeOperation = inv ? 'multiply' : 'screen';
  for (let i = 0; i < blobCount; i++) {
    const cx = w * rng();
    const cy = h * rng();
    const r = Math.max(w, h) * (0.3 + rng() * 0.4) * scale;
    
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    const color = getColor(pal, 0.2 + (i / blobCount) * 0.6, inv);
    let rgba = color;
    const opacity = inv ? 0.3 : 0.45;
    if (color.startsWith('#')) {
      const rh = parseInt(color.slice(1,3), 16);
      const gh = parseInt(color.slice(3,5), 16);
      const bh = parseInt(color.slice(5,7), 16);
      rgba = `rgba(${rh},${gh},${bh},${opacity})`;
    }
    grad.addColorStop(0, rgba);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawIridescentBubbles(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(5, Math.round(15 * complexity));
  ctx.save();
  for (let i = 0; i < count; i++) {
    const cx = w * rng();
    const cy = h * rng();
    const r = h * (0.05 + rng() * 0.15) * scale;
    
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(cx - r*0.3, cy - r*0.3, 0, cx, cy, r);
    const c1 = getColor(pal, 0.8, inv);
    
    let rgba1 = inv ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)';
    let rgba2 = inv ? 'rgba(0,0,0,0.01)' : 'rgba(255,255,255,0)';
    if (c1.startsWith('#') && !inv) {
      const rh = parseInt(c1.slice(1,3), 16);
      const gh = parseInt(c1.slice(3,5), 16);
      const bh = parseInt(c1.slice(5,7), 16);
      rgba1 = `rgba(${rh},${gh},${bh},0.1)`;
      rgba2 = `rgba(${rh},${gh},${bh},0.01)`;
    }
    grad.addColorStop(0, rgba1);
    grad.addColorStop(0.8, rgba2);
    grad.addColorStop(1, inv ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)');
    
    ctx.fillStyle = grad;
    ctx.fill();
    
    ctx.strokeStyle = inv ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1 * scale;
    ctx.stroke();
    
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.ellipse(cx - r*0.5, cy - r*0.5, r*0.15, r*0.08, Math.PI/4, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.restore();
}

function drawLightBeams(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(4, Math.round(8 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'screen';
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.beginPath();
    const startX = w * (rng() - 0.2);
    const endX = w * (rng() + 0.2);
    
    ctx.moveTo(startX, -50);
    ctx.lineTo(startX + w * 0.2 * scale, -50);
    ctx.lineTo(endX + w * 0.2 * scale, h + 50);
    ctx.lineTo(endX, h + 50);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(startX, 0, endX, h);
    const c = getColor(pal, t * 0.6 + 0.2, inv);
    let rgba1 = c, rgba2 = 'rgba(0,0,0,0)';
    const opacity = inv ? 0.22 : 0.35;
    if (c.startsWith('#')) {
      const rh = parseInt(c.slice(1,3), 16);
      const gh = parseInt(c.slice(3,5), 16);
      const bh = parseInt(c.slice(5,7), 16);
      rgba1 = `rgba(${rh},${gh},${bh},${opacity})`;
    }
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.5, rgba1);
    grad.addColorStop(1, rgba2);
    
    ctx.fillStyle = grad;
    ctx.fill();
  }
  ctx.restore();
}

function drawOrigamiCrystal(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(10, Math.round(25 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'source-over';
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.beginPath();
    const x1 = w * rng();
    const y1 = h * rng();
    const x2 = x1 + (rng() - 0.5) * w * 0.3 * scale;
    const y2 = y1 + (rng() - 0.5) * h * 0.3 * scale;
    const x3 = x1 + (rng() - 0.5) * w * 0.3 * scale;
    const y3 = y1 + (rng() - 0.5) * h * 0.3 * scale;
    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(x1, y1, x2, y2);
    const c1 = getColor(pal, t * 0.8, inv);
    const c2 = getColor(pal, Math.min(1.0, t * 0.8 + 0.2), inv);
    
    let rgba1 = c1, rgba2 = c2;
    const opacity = inv ? 0.28 : 0.45;
    if (c1.startsWith('#')) {
      const rh = parseInt(c1.slice(1,3), 16);
      const gh = parseInt(c1.slice(3,5), 16);
      const bh = parseInt(c1.slice(5,7), 16);
      rgba1 = `rgba(${rh},${gh},${bh},${opacity})`;
    }
    if (c2.startsWith('#')) {
      const rh = parseInt(c2.slice(1,3), 16);
      const gh = parseInt(c2.slice(3,5), 16);
      const bh = parseInt(c2.slice(5,7), 16);
      rgba2 = `rgba(${rh},${gh},${bh},${opacity})`;
    }
    
    grad.addColorStop(0, rgba1);
    grad.addColorStop(1, rgba2);
    
    ctx.fillStyle = grad;
    ctx.fill();
    
    ctx.strokeStyle = inv ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 0.5 * scale;
    ctx.stroke();
  }
  ctx.restore();
}

function drawMinimalistAbstract(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const count = Math.max(5, Math.round(12 * complexity));
  ctx.save();
  for (let i = 0; i < count; i++) {
    const t = i / count;
    ctx.beginPath();
    const startY = h * (0.2 + t * 0.7);
    ctx.moveTo(-50, startY);
    
    const steps = 60;
    for (let s = 0; s <= steps; s++) {
      const st = s / steps;
      const x = st * w;
      const wave = Math.sin(st * Math.PI * 2 + t * Math.PI) * h * 0.05 * scale;
      const n = fbm(st * 2 + i, 3) * h * 0.05 * scale;
      ctx.lineTo(x, startY + wave + n);
    }
    
    ctx.strokeStyle = getColor(pal, t * 0.8 + 0.1, inv);
    ctx.lineWidth = Math.max(1, (1 + t * 3) * scale);
    ctx.stroke();
  }
  ctx.restore();
}

function drawAuroraLights(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const ribbons = Math.max(3, Math.round(6 * complexity));
  ctx.save();
  ctx.globalCompositeOperation = inv ? 'multiply' : 'screen';
  
  for (let i = 0; i < ribbons; i++) {
    const t = i / ribbons;
    ctx.beginPath();
    
    const startY = h * (0.3 + t * 0.4);
    ctx.moveTo(0, startY);
    
    const steps = 40;
    const points = [];
    for (let s = 0; s <= steps; s++) {
      const st = s / steps;
      const x = st * w;
      const wave1 = Math.sin(st * Math.PI * 1.5 + t * Math.PI + rng() * 0.2) * h * 0.12 * scale;
      const wave2 = Math.cos(st * Math.PI * 3.5 - t * Math.PI * 0.5) * h * 0.04 * scale;
      points.push({ x, y: startY + wave1 + wave2 });
    }
    
    for (let s = 0; s <= steps; s++) {
      ctx.lineTo(points[s].x, points[s].y);
    }
    for (let s = steps; s >= 0; s--) {
      ctx.lineTo(points[s].x, points[s].y + h * (0.08 + t * 0.05) * scale);
    }
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(0, startY - h * 0.1, 0, startY + h * 0.2);
    const c1 = getColor(pal, t * 0.6 + 0.1, inv);
    
    let r1 = 0, g1 = 0, b1 = 0;
    if (c1.startsWith('rgb')) {
      const parts = c1.match(/\d+/g);
      if (parts) { r1 = parts[0]; g1 = parts[1]; b1 = parts[2]; }
    } else {
      r1 = parseInt(c1.slice(1,3), 16); g1 = parseInt(c1.slice(3,5), 16); b1 = parseInt(c1.slice(5,7), 16);
    }
    
    grad.addColorStop(0, `rgba(${r1},${g1},${b1},0)`);
    grad.addColorStop(0.5, inv ? `rgba(${r1},${g1},${b1},0.35)` : `rgba(${r1},${g1},${b1},0.45)`);
    grad.addColorStop(1, `rgba(${r1},${g1},${b1},0)`);
    
    ctx.fillStyle = grad;
    ctx.fill();
  }
  ctx.restore();
}

function drawCyberpunkGrid(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  ctx.save();
  const bgGrad = ctx.createRadialGradient(w/2, h*0.4, 10, w/2, h*0.4, Math.max(w, h));
  bgGrad.addColorStop(0, getColor(pal, 0.4, inv));
  bgGrad.addColorStop(1, getBgColor(pal, inv));
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  const horizonY = h * 0.45;
  const numLines = Math.max(10, Math.round(24 * complexity));
  ctx.lineWidth = Math.max(1, 1.5 * scale);
  
  for (let i = 0; i <= numLines; i++) {
    const t = i / numLines;
    const xStart = w * (0.1 + t * 0.8);
    const grad = ctx.createLinearGradient(w / 2, horizonY, xStart, h);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, getColor(pal, 0.7, inv));
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(w / 2, horizonY);
    ctx.lineTo(w * (0.5 + (t - 0.5) * 4), h);
    ctx.stroke();
  }

  const horizontalLines = Math.max(8, Math.round(15 * complexity));
  for (let i = 0; i < horizontalLines; i++) {
    const t = Math.pow(i / (horizontalLines - 1), 2.5);
    const y = horizonY + (h - horizonY) * t;
    
    const grad = ctx.createLinearGradient(0, y, w, y);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.5, getColor(pal, 0.8, inv));
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawLiquidMarble(ctx, w, h, pal, rng, inv, scale = 1.0, complexity = 1.0) {
  const loops = Math.max(8, Math.round(18 * complexity));
  ctx.save();
  
  const cx = w * (0.4 + rng() * 0.2);
  const cy = h * (0.4 + rng() * 0.2);
  
  for (let i = 0; i < loops; i++) {
    const t = i / loops;
    ctx.beginPath();
    
    const baseRadius = Math.min(w, h) * (0.05 + t * 0.5) * scale;
    const points = 72;
    for (let p = 0; p <= points; p++) {
      const angle = (p / points) * Math.PI * 2;
      const nx = Math.cos(angle);
      const ny = Math.sin(angle);
      
      const noiseVal = fbm(nx * 1.5 + i * 0.4 + rng() * 0.1, 4) * 0.2 * scale;
      const radius = baseRadius * (1 + noiseVal);
      
      const x = cx + nx * radius;
      const y = cy + ny * radius;
      if (p === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    ctx.strokeStyle = getColor(pal, t * 0.8 + 0.1, inv);
    ctx.lineWidth = Math.max(1, (2 + (1 - t) * 6) * scale);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawClockOverlay(ctx, w, h, type, paletteIdx, inv) {
  const bg = getBgColor(paletteIdx, inv);
  const r = parseInt(bg.slice(1,3), 16), g = parseInt(bg.slice(3,5), 16), b = parseInt(bg.slice(5,7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  ctx.fillStyle = brightness > 125 ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.9)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const time = `${hours}:${mins}`;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

  if (type === 'desktop') {
    ctx.font = '300 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText(dateStr, w / 2, h * 0.20);
    ctx.font = '600 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText(time, w / 2, h * 0.30);
  } else if (type === 'mobile') {
    const fScale = w / 145;
    ctx.font = `500 ${Math.round(7 * fScale)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`;
    ctx.fillText(dateStr.toUpperCase(), w / 2, h * 0.15);
    ctx.font = `700 ${Math.round(28 * fScale)}px -apple-system, BlinkMacSystemFont, "SF Pro Display", Roboto`;
    ctx.fillText(time, w / 2, h * 0.23);
  }
}

export function drawPattern(ctx, w, h, patternIdx, paletteIdx, s, inv = false, scale = 1.0, complexity = 1.0) {
  _seed = s;
  const rng = mulberry32(s);
  ctx.fillStyle = getBgColor(paletteIdx, inv);
  ctx.fillRect(0, 0, w, h);

  switch(PATTERNS[patternIdx]) {
    case 'flowing-hills':   drawFlowingHills(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'smooth-wave':     drawSmoothWave(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'sand-dunes':      drawSandDunes(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'mountains':       drawMountains(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'concentric-arcs': drawConcentricArcs(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'desert-dunes':    drawDesertDunes(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'crystal-peaks':   drawCrystalPeaks(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'cosmic-constellations': drawCosmicConstellations(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'big-sur-waves':   drawBigSurWaves(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'monterey-silk':   drawMontereySilk(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'ventura-petals':  drawVenturaPetals(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'sonoma-topography': drawSonomaTopography(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'mesh-gradient':   drawMeshGradient(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'iridescent-bubbles': drawIridescentBubbles(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'light-beams':     drawLightBeams(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'origami-crystal': drawOrigamiCrystal(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'minimalist-abstract': drawMinimalistAbstract(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'aurora-lights':   drawAuroraLights(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'cyber-grid':      drawCyberpunkGrid(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
    case 'liquid-marble':   drawLiquidMarble(ctx, w, h, paletteIdx, rng, inv, scale, complexity); break;
  }
}

export async function exportWallpaper(w, h, patternIdx, paletteIdx, s, inv, filename, scale = 1.0, complexity = 1.0) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  drawPattern(c.getContext('2d'), w, h, patternIdx, paletteIdx, s, inv, scale, complexity);

  const blob = await new Promise(resolve => c.toBlob(resolve, 'image/png'));

  if (window.__TAURI__) {
    const arrayBuffer = await blob.arrayBuffer();
    const bytes = Array.from(new Uint8Array(arrayBuffer));
    await window.__TAURI__.core.invoke('save_wallpaper', { bytes, filename });
  } else if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{
          description: 'PNG Image',
          accept: { 'image/png': ['.png'] }
        }]
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
    } catch (e) {
      if (e.name !== 'AbortError') console.error('Save failed:', e);
    }
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }
}

export function registerPalette(name, colors) {
  PALETTES.push({ name, colors });
  return PALETTES.length - 1;
}

export { PALETTES, PATTERNS, PATTERN_LABELS, DESKTOP_W, DESKTOP_H, MOBILE_W, MOBILE_H };

