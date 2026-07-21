import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const EXTRACTED = path.join(ROOT, "tmp-shade-docx", "extracted");
const MEDIA = path.join(EXTRACTED, "word", "media");
const DEST = path.join(ROOT, "public", "images", "galleries", "shade-structures");
const CATEGORY_HERO = path.join(ROOT, "public", "images", "categories", "shade-structures.png");
const GALLERIES_JSON = path.join(ROOT, "content", "galleries.json");

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

const xml = fs.readFileSync(path.join(EXTRACTED, "word", "document.xml"), "utf8");
const rels = fs.readFileSync(
  path.join(EXTRACTED, "word", "_rels", "document.xml.rels"),
  "utf8"
);

const ridMap = {};
for (const m of rels.matchAll(/Id="(rId\d+)"[^>]*Target="([^"]+)"/g)) {
  ridMap[m[1]] = m[2].replace(/^media\//, "");
}

const paras = xml.split(/<\/w:p>/);
const flow = [];
for (const p of paras) {
  const texts = [...p.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)]
    .map((m) => m[1])
    .join("");
  const imgs = [...p.matchAll(/a:blip[^>]*r:embed="(rId\d+)"/g)].map(
    (m) => ridMap[m[1]] || m[1]
  );
  const cleaned = texts
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, " ")
    .trim();
  if (imgs.length || cleaned) flow.push({ text: cleaned, images: imgs });
}

console.log("Document flow:");
flow.forEach((f, i) => console.log(String(i).padStart(3), JSON.stringify(f)));

// Pair each image with the nearest following non-empty label text
const items = [];
for (let i = 0; i < flow.length; i++) {
  const { images, text } = flow[i];
  for (const img of images) {
    let label = text;
    if (!label) {
      for (let j = i + 1; j < flow.length; j++) {
        if (flow[j].images.length) break;
        if (flow[j].text) {
          label = flow[j].text;
          break;
        }
      }
    }
    // Prefer label that looks like a product name (not a long paragraph)
    if (label && label.length > 80) {
      // try previous short text
      for (let j = i - 1; j >= 0; j--) {
        if (flow[j].images.length) break;
        if (flow[j].text && flow[j].text.length <= 80) {
          label = flow[j].text;
          break;
        }
      }
    }
    items.push({ media: img, label: label || path.parse(img).name });
  }
}

console.log("\nPaired items:");
items.forEach((it, i) => console.log(i + 1, it.media, "=>", it.label));

// Copy images with stable filenames from labels
const usedSlugs = new Set();
const galleryImages = [];

for (let i = 0; i < items.length; i++) {
  const { media, label } = items[i];
  let base = slugify(label) || `shade-${String(i + 1).padStart(2, "0")}`;
  let slug = base;
  let n = 2;
  while (usedSlugs.has(slug)) {
    slug = `${base}-${n++}`;
  }
  usedSlugs.add(slug);

  const destName = `${slug}.png`;
  const srcPath = path.join(MEDIA, media);
  const destPath = path.join(DEST, destName);
  fs.copyFileSync(srcPath, destPath);

  const id = `SS-${String(i + 1).padStart(2, "0")}`;
  galleryImages.push({
    src: `/images/galleries/shade-structures/${destName}`,
    alt: `Shade Structures — ${label}`,
    source: "poligon",
    tier: "signature",
    id,
    name: label,
  });

  // First image → home page category card
  if (i === 0) {
    fs.copyFileSync(srcPath, CATEGORY_HERO);
    console.log("\nHero / home card image set from first doc image:", destName);
  }
}

// Update galleries.json — replace shade-structures images + heroImage
const galleries = JSON.parse(fs.readFileSync(GALLERIES_JSON, "utf8"));
const idx = galleries.findIndex((g) => g.slug === "shade-structures");
if (idx < 0) throw new Error("shade-structures gallery not found");

galleries[idx] = {
  ...galleries[idx],
  heroImage: "/images/categories/shade-structures.png",
  images: galleryImages,
};

fs.writeFileSync(GALLERIES_JSON, JSON.stringify(galleries, null, 2) + "\n");
console.log(`\nUpdated galleries.json with ${galleryImages.length} images`);
console.log("Done.");
