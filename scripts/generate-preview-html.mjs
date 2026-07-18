import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleries = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../content/galleries.json"), "utf8")
);

const cards = galleries
  .map((g) => {
    const hero = g.heroImage.replace(/^\//, "public/");
    const thumbs = g.images
      .slice(0, 6)
      .map(
        (img) =>
          `<img src="${img.src.replace(/^\//, "public/")}" alt="${img.alt.replace(/"/g, "&quot;")}" title="${img.alt.replace(/"/g, "&quot;")}">`
      )
      .join("\n        ");
    return `
    <section class="category" id="${g.slug}">
      <h2>${g.name} <span class="tier">${g.tier}</span></h2>
      <p>${g.description}</p>
      <p class="count">${g.images.length} images</p>
      <div class="grid">${thumbs}</div>
    </section>`;
  })
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parkezza Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Serif+Display&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { font-family: "DM Sans", system-ui, sans-serif; background: #f5f0e8; color: #1c1c1e; margin: 0; padding: 2rem; -webkit-font-smoothing: antialiased; }
    header { text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #ddd6cb; }
    header img { max-height: 48px; }
    h1 { font-family: "DM Serif Display", Georgia, serif; font-size: 2.5rem; font-weight: 400; line-height: 1.15; letter-spacing: -0.01em; margin: 1rem auto 0.5rem; max-width: 820px; }
    h2 { font-family: "DM Serif Display", Georgia, serif; font-weight: 400; }
    .note { background: #1c1c1e; color: #f5f0e8; padding: 1rem 1.5rem; border-radius: 8px; max-width: 640px; margin: 0 auto 2rem; font-family: sans-serif; font-size: 0.9rem; line-height: 1.5; }
    nav { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 2rem; font-family: sans-serif; }
    nav a { background: #a67c52; color: white; padding: 0.4rem 0.8rem; border-radius: 999px; text-decoration: none; font-size: 0.85rem; }
    nav a:hover { background: #8a6644; }
    .category { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
    .category h2 { margin: 0 0 0.5rem; font-size: 1.5rem; }
    .tier { font-size: 0.7rem; background: #1c1c1e; color: #f5f0e8; padding: 0.2rem 0.6rem; border-radius: 999px; vertical-align: middle; font-family: sans-serif; text-transform: uppercase; }
    .count { font-family: sans-serif; font-size: 0.85rem; color: #5c5650; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
    .grid img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 8px; cursor: zoom-in; }
    .grid img:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <header>
    <img src="public/logo.png" alt="Parkezza">
    <h1>Curated furnishings for distinguished outdoor environments</h1>
    <p>Static preview — double-click this file anytime. No server needed.</p>
  </header>
  <div class="note">
    <strong>Full website:</strong> Double-click <code>START-SITE.bat</code> in this same folder to run the complete site at localhost:3000.<br>
    <strong>Images folder:</strong> Browse <code>public\\images\\galleries</code> in File Explorer.
  </div>
  <nav>
    ${galleries.map((g) => `<a href="#${g.slug}">${g.name}</a>`).join("\n    ")}
  </nav>
  ${cards}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "../PREVIEW.html"), html, "utf8");
console.log("Wrote PREVIEW.html");
