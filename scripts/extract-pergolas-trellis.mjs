import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const EXTRACTED = path.join(ROOT, "tmp-pergola-docx", "extracted");
const MEDIA = path.join(EXTRACTED, "word", "media");
const DEST = path.join(ROOT, "public", "images", "galleries", "pergolas-gazebos");
const HERO = path.join(ROOT, "public", "images", "categories", "pergolas-gazebos.png");
const JSON_PATH = path.join(ROOT, "content", "galleries.json");

const labels = [
  "P-Ply1",
  "P-Ply2",
  "P-Ply3",
  "P-Ply4",
  "P-Ply5",
  "P-Ply6",
  "P-Ply7",
  "P-Ply8",
];

fs.mkdirSync(DEST, { recursive: true });

// Clear old gallery images
for (const f of fs.readdirSync(DEST)) {
  if (/\.(png|jpg|jpeg|webp)$/i.test(f)) fs.unlinkSync(path.join(DEST, f));
}

const items = labels.map((name, i) => {
  const media = `image${i + 1}.png`;
  const file = `${name.toLowerCase()}.png`;
  fs.copyFileSync(path.join(MEDIA, media), path.join(DEST, file));
  return {
    src: `/images/galleries/pergolas-gazebos/${file}`,
    alt: `Pergolas Trellis — ${name}`,
    source: "parkezza",
    tier: "signature",
    id: `PG-${String(i + 1).padStart(2, "0")}`,
    name,
  };
});

fs.copyFileSync(path.join(DEST, "p-ply1.png"), HERO);

const galleries = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
const g = galleries.find((x) => x.slug === "pergolas-gazebos");
if (!g) throw new Error("pergolas-gazebos gallery not found");

g.name = "Pergolas Trellis";
g.description =
  "Architectural pergolas and trellis structures for resorts, golf courses, and distinguished outdoor environments.";
g.heroImage = "/images/categories/pergolas-gazebos.png";
g.images = items;

fs.writeFileSync(JSON_PATH, JSON.stringify(galleries, null, 2) + "\n");
console.log("Updated", items.length, "pergola/trellis images");
items.forEach((img) => console.log(img.id, img.name, img.src));
