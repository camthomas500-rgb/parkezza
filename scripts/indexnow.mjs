/**
 * Ping IndexNow (Bing, Yahoo, DuckDuckGo, etc.) after production deploys.
 * Skips local builds unless INDEXNOW_FORCE=1.
 *
 * Key file must remain at: public/{INDEXNOW_KEY}.txt
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const INDEXNOW_KEY = "a7c3e91f4b8d2065e1f9a04c7d2b8356";
const HOST = "parkezza.com";
const SITE_URL = `https://${HOST}`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function shouldRun() {
  if (process.env.INDEXNOW_FORCE === "1") return true;
  if (process.argv.includes("--force")) return true;
  // Netlify production deploys set CONTEXT=production
  if (process.env.CONTEXT === "production") return true;
  return false;
}

function collectUrls() {
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/markets`,
    `${SITE_URL}/projects`,
    `${SITE_URL}/resources`,
    `${SITE_URL}/about`,
    `${SITE_URL}/quote`,
    `${SITE_URL}/contact`,
  ];

  try {
    const galleries = JSON.parse(
      readFileSync(join(root, "content/galleries.json"), "utf8")
    );
    for (const g of galleries) {
      if (g?.slug) urls.push(`${SITE_URL}/galleries/${g.slug}`);
    }
  } catch (err) {
    console.warn("[indexnow] Could not read galleries.json:", err.message);
  }

  try {
    // Resource slugs are defined in lib/resources.ts — keep a parallel list here
    // so this script stays dependency-free (no TS import).
    const resourceSlugs = [
      "specifying-outdoor-site-furnishings",
      "dog-waste-stations-for-trails-and-paths",
      "matching-benches-and-litter-receptacles",
      "ada-picnic-tables-for-parks",
      "intermountain-west-and-nationwide-projects",
    ];
    for (const slug of resourceSlugs) {
      urls.push(`${SITE_URL}/resources/${slug}`);
    }
  } catch {
    /* ignore */
  }

  return [...new Set(urls)];
}

async function main() {
  if (!shouldRun()) {
    console.log(
      "[indexnow] Skip (not a production deploy). Set INDEXNOW_FORCE=1 to run locally."
    );
    return;
  }

  const keyPath = join(root, "public", `${INDEXNOW_KEY}.txt`);
  if (!existsSync(keyPath)) {
    console.warn(`[indexnow] Missing key file: public/${INDEXNOW_KEY}.txt`);
    return;
  }

  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
  const urlList = collectUrls();

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    const text = await res.text().catch(() => "");
    if (res.ok || res.status === 202) {
      console.log(
        `[indexnow] Submitted ${urlList.length} URLs (HTTP ${res.status})`
      );
    } else {
      console.warn(
        `[indexnow] Request finished with HTTP ${res.status}: ${text.slice(0, 200)}`
      );
    }
  } catch (err) {
    // Never fail the Netlify build over IndexNow
    console.warn("[indexnow] Request failed:", err.message);
  }
}

main();
