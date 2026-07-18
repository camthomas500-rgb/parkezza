import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public", "images");
const CONTENT = path.join(ROOT, "content");

const SOURCES = {
  parkezza: "C:\\Users\\Ce\\Documents\\01Parkezza\\Images",
  zenon: "C:\\Users\\Ce\\Documents\\MainZenon Cursor\\ZenonCursorUpload\\assets",
  pics: "C:\\Users\\Ce\\Documents\\pics planters shade tree grates banners cursor",
  hdu: "C:\\Users\\Ce\\Documents\\HeavyDutyUmbrella\\assets\\images",
  dog: "C:\\Users\\Ce\\Documents\\Dog Cursor\\assets",
  logo: "C:\\Users\\Ce\\Documents\\01Parkezza\\close draft logo1.png",
};

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

const CATEGORY_META = {
  benches: {
    name: "Benches",
    description:
      "Signature and essential outdoor benches for streetscapes, plazas, campuses, and resort gathering spaces.",
    tier: "signature",
  },
  "picnic-tables": {
    name: "Picnic Tables",
    description:
      "Heavy-duty picnic tables for parks, recreation centers, and outdoor dining — ADA configurations available.",
    tier: "essential",
  },
  bollards: {
    name: "Bollards",
    description:
      "Security and perimeter bollards for traffic calming, site delineation, and architectural streetscapes.",
    tier: "essential",
  },
  "waste-receptacles": {
    name: "Waste Receptacles",
    description:
      "Attractive trash and recycling receptacles for public spaces, resorts, and municipal environments.",
    tier: "essential",
  },
  "chairs-chaises": {
    name: "Chairs & Chaises",
    description:
      "Outdoor dining chairs, lounge seating, and chaises for patios, pool decks, and hospitality venues.",
    tier: "signature",
  },
  planters: {
    name: "Planters",
    description:
      "Commercial planters to define entries, plazas, and streetscapes with refined landscape architecture.",
    tier: "signature",
  },
  "tree-grates": {
    name: "Tree Grates",
    description:
      "Decorative tree grates and guards that protect root zones while completing the streetscape.",
    tier: "essential",
  },
  "shade-structures": {
    name: "Shade Structures",
    description:
      "Engineered shade canopies and structures for playgrounds, pools, dining, and outdoor gathering.",
    tier: "signature",
  },
  "park-shelters": {
    name: "Park Shelters",
    description:
      "Pre-engineered park shelters and pavilions for recreation centers, parks, and community spaces.",
    tier: "signature",
  },
  "pergolas-gazebos": {
    name: "Pergolas & Gazebos",
    description:
      "Architectural pergolas and gazebos for resorts, golf courses, and distinguished outdoor environments.",
    tier: "signature",
  },
  umbrellas: {
    name: "Commercial Umbrellas",
    description:
      "Wind-rated commercial patio umbrellas, cantilever systems, and shade for resorts and hospitality.",
    tier: "signature",
  },
  "dog-park-stations": {
    name: "Dog Park Stations",
    description:
      "Dog waste stations, dispensers, agility equipment, and site amenities for dog parks and trails.",
    tier: "essential",
  },
  "bike-racks": {
    name: "Bike Racks",
    description:
      "Secure bicycle parking from loop racks to decorative designs for campuses and streetscapes.",
    tier: "essential",
  },
  flagpoles: {
    name: "Flagpoles",
    description:
      "Standard, Premium, and Heavy Duty Flagpoles. Internal and External Halyards, Vanguard. Flags, all sizes. Heights 20 ft – 70 ft. Butt diameters 3\" – 12\".",
    tier: "essential",
  },
};

const ZENON_FOLDER_MAP = {
  bollards: "bollards",
  "park-shelters": "park-shelters-gallery",
  "pergolas-gazebos": "pergolas-gazebos-gallery",
  planters: "planters-gallery",
  "shade-structures": "shade-structures-gallery",
  "tree-grates": "tree-grates-gallery",
  umbrellas: "umbrellas",
};

function slugify(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
  }
  return dest;
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) results.push(full);
    }
  }
  walk(dir);
  return results;
}

function categorizeParkezza(filename) {
  const base = path.basename(filename);
  if (/^P-Bench|^P-backless|^P-TerraceBench|^P-Booth|^P-SteelSVS/i.test(base)) return "benches";
  if (/^P-Bollards/i.test(base)) return "bollards";
  if (/^P-Picnic/i.test(base)) return "picnic-tables";
  if (/^P-Litter/i.test(base)) return "waste-receptacles";
  if (/^P-Chair|^P-Chaise|^P-Cafechair/i.test(base)) return "chairs-chaises";
  if (/^P-Lily|^P-Eva/i.test(base)) return "benches";
  if (/^P-Treeguard/i.test(base)) return "tree-grates";
  // RailLink and similar LF plaza seating belong with benches, not bike racks
  if (/^P-RailLink/i.test(base)) return "benches";
  return null;
}

function detectTier(filename) {
  if (/LF/i.test(filename)) return "signature";
  if (/VS|SVS/i.test(filename)) return "essential";
  return "essential";
}

function humanizeAlt(filename, categoryName) {
  const base = path.basename(filename, path.extname(filename))
    .replace(/^P-/, "")
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
  return `${categoryName} — ${base}`;
}

function categorizePics(filename) {
  const lower = path.basename(filename).toLowerCase();
  if (lower.includes("planter")) return "planters";
  if (lower.includes("shadestructure") || lower.includes("shade")) return "shade-structures";
  if (lower.includes("tree grate") || lower.includes("tree-grate")) return "tree-grates";
  if (lower.includes("flagpole")) return "flagpoles";
  if (lower.includes("shelter") || lower.includes("finished projects")) return "park-shelters";
  return null;
}

function loadHduAlts() {
  const manifestPath = path.join(SOURCES.hdu, "manifest.json");
  if (!fs.existsSync(manifestPath)) return {};
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const alts = {};
  for (const key of Object.keys(manifest)) {
    alts[key] = key
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return alts;
}

function extractDogAlts() {
  const htmlDir = "C:\\Users\\Ce\\Documents\\Dog Cursor";
  const alts = {};
  if (!fs.existsSync(htmlDir)) return alts;
  for (const file of fs.readdirSync(htmlDir).filter((f) => f.endsWith(".html"))) {
    const html = fs.readFileSync(path.join(htmlDir, file), "utf8");
    const re = /src="assets\/([^"]+)"\s+alt="([^"]+)"/g;
    let m;
    while ((m = re.exec(html))) {
      alts[m[1]] = m[2];
    }
  }
  return alts;
}

function main() {
  const galleries = Object.fromEntries(
    Object.entries(CATEGORY_META).map(([slug, meta]) => [
      slug,
      { slug, ...meta, images: [] },
    ])
  );

  const usedNames = new Set();

  function addImage(slug, srcPath, alt, source, tier) {
    if (!galleries[slug]) return;
    const ext = path.extname(srcPath).toLowerCase();
    let baseName = slugify(path.basename(srcPath, ext));
    let destName = `${baseName}${ext}`;
    let counter = 1;
    while (usedNames.has(`${slug}/${destName}`)) {
      destName = `${baseName}-${counter}${ext}`;
      counter++;
    }
    usedNames.add(`${slug}/${destName}`);

    const relDest = path.join("galleries", slug, destName);
    const absDest = path.join(PUBLIC, relDest);
    copyFile(srcPath, absDest);

    galleries[slug].images.push({
      src: `/images/${relDest.replace(/\\/g, "/")}`,
      alt,
      source,
      tier: tier || galleries[slug].tier,
    });
  }

  // Parkezza images
  for (const file of listImages(SOURCES.parkezza)) {
    const slug = categorizeParkezza(file);
    if (!slug) continue;
    const meta = CATEGORY_META[slug];
    addImage(slug, file, humanizeAlt(file, meta.name), "parkezza", detectTier(file));
  }

  // Zenon asset folders
  for (const [slug, folder] of Object.entries(ZENON_FOLDER_MAP)) {
    const dir = path.join(SOURCES.zenon, folder);
    for (const file of listImages(dir)) {
      addImage(slug, file, humanizeAlt(file, CATEGORY_META[slug].name), "zenon", "essential");
    }
  }

  // Pics folder
  for (const file of listImages(SOURCES.pics)) {
    const slug = categorizePics(file);
    if (!slug) continue;
    addImage(slug, file, humanizeAlt(file, CATEGORY_META[slug].name), "pics", "essential");
  }

  // Heavy Duty Umbrellas — prefer webp
  const hduAlts = loadHduAlts();
  const hduFiles = listImages(SOURCES.hdu).filter((f) => f.endsWith(".webp"));
  for (const file of hduFiles) {
    const key = path.basename(file, ".webp");
    const alt = hduAlts[key]
      ? `Commercial umbrella — ${hduAlts[key]}`
      : humanizeAlt(file, "Commercial Umbrellas");
    addImage("umbrellas", file, alt, "heavydutyumbrellas", "signature");
  }

  // Dog park stations
  const dogAlts = extractDogAlts();
  for (const file of listImages(SOURCES.dog)) {
    if (/zenon-logo/i.test(file)) continue;
    const base = path.basename(file);
    const alt = dogAlts[base] || humanizeAlt(file, "Dog Park Stations");
    addImage("dog-park-stations", file, alt, "dogparkstations", "essential");
  }

  // Logo
  if (fs.existsSync(SOURCES.logo)) {
    copyFile(SOURCES.logo, path.join(ROOT, "public", "logo.png"));
  }

  // Category hero images — first image per category
  ensureDir(path.join(PUBLIC, "categories"));
  const output = [];
  for (const gallery of Object.values(galleries)) {
    if (gallery.images.length === 0) continue;

    const heroSrc = gallery.images[0].src;
    const heroExt = path.extname(heroSrc);
    const heroDest = path.join(PUBLIC, "categories", `${gallery.slug}${heroExt}`);
    const heroAbsSrc = path.join(ROOT, "public", heroSrc.replace(/^\//, ""));
    if (fs.existsSync(heroAbsSrc)) copyFile(heroAbsSrc, heroDest);

    output.push({
      slug: gallery.slug,
      name: gallery.name,
      tier: gallery.tier,
      description: gallery.description,
      heroImage: `/images/categories/${gallery.slug}${heroExt}`,
      images: gallery.images,
    });
  }

  output.sort((a, b) => a.name.localeCompare(b.name));
  ensureDir(CONTENT);
  fs.writeFileSync(
    path.join(CONTENT, "galleries.json"),
    JSON.stringify(output, null, 2),
    "utf8"
  );

  const totalImages = output.reduce((n, g) => n + g.images.length, 0);
  console.log(`Organized ${totalImages} images across ${output.length} categories.`);
  console.log(`Wrote ${path.join(CONTENT, "galleries.json")}`);
}

main();
