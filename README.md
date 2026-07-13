# WLLPR — Procedural Wallpaper Generator

WLLPR is a premium client-side procedural wallpaper generator that lets you craft and download beautiful, high-resolution graphics for your Desktop (4K) and iPhone. Built using vanilla JS and the HTML5 Canvas 2D API, it delivers buttery-smooth rendering with lightweight client assets.

## 🎨 Features

*   **20 Unique Procedural Patterns**:
    *   *Apple-Inspired*: Big Sur Waves, Monterey Silk, Ventura Petals, Sonoma Topo, and Origami Crystal.
    *   *Abstract & Fluid*: Glass Bubbles, Light Beams, Liquid Marble, Mesh Gradient, and Wave structures.
    *   *Geometric & Topographical*: Perspective Cyber Grid, Concentric Arcs, Hills, Mountains, Dunes, and Minimalist Line art.
*   **34 Hand-Curated Color Palettes**: Includes premium gradient combos like Pastel Dreams, Cyberpunk Red, Neon Horizon, Miami Vice, Nordic Moss, and Retro Synth.
*   **Deep Customisation**: Live adjustments for Pattern Scale, Complexity, and seed-based variation randomization.
*   **High-Resolution Exports**: Direct OS-native saves for:
    *   🖥️ **Desktop 4K**: 3840 × 2160 px (PNG)
    *   📱 **iPhone**: 1290 × 2796 px (PNG)
*   **Viewport-Optimized Rendering**: Powered by `IntersectionObserver` to lazily render preview canvases only as they enter the screen, keeping scroll performance lag-free even with hundreds of options.
*   **CI/CD Ready**: Configured for automated deployment to GitHub Pages via GitHub Actions.

## 🚀 Running Locally

Ensure you have [Node.js](https://nodejs.org/) installed. Run the following command in the project root to start a local web server:

```bash
# Serve the static files from the /dist folder
npx serve dist
```

Open `http://localhost:3000` in your browser.

## 📦 Project Structure

*   `/dist` — Frontend production assets (HTML/CSS/JS).
    *   `/js/engine.js` — Core drawing logic and canvas mathematical rendering.
    *   `/js/wallpapers.js` — Preconfigured template assets.
    *   `/create` — Creator interface.
    *   `/wallpaper` — Detail page and wallpaper setup previews.
*   `.github/workflows/deploy.yml` — Automated GitHub Pages deployment pipeline.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
