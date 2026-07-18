# Parkezza

Upscale outdoor site furnishing website for [parkezza.com](https://parkezza.com).

**Index (homepage):** [`app/page.tsx`](app/page.tsx) — same role as `index.html` on your other sites. The public nav label is still **Home**.

## Development

```bash
npm install
npm run organize-images   # copy images from source folders into public/images
npm run dev
```

Or double-click `START-SITE.bat`.

## Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ID=xdaqazvg
```

## Deploy to Netlify

When your Parkezza Netlify account is ready:

1. **Put this folder on GitHub** (one-time), then in Netlify: **Add new site → Import an existing project** and pick the repo.
2. Netlify should detect Next.js (`npm run build`, publish `.next`). `netlify.toml` already sets this.
3. In **Site configuration → Environment variables**, add:
   - `NEXT_PUBLIC_FORMSPREE_ID` = `xdaqazvg`
4. Deploy. You’ll get a URL like `something.netlify.app`.
5. **Domain management → Add domain**: `parkezza.com` (Netlify will also suggest `www`).
6. Optionally add `heavydutyumbrellas.com` and `dogparkstations.com` as domain aliases (redirects are in `netlify.toml`).

Path redirects (old gallery URLs) live in `next.config.ts` and work on any host.

## GoDaddy DNS (parkezza.com)

Keep DNS at GoDaddy (external DNS). After the domain is added in Netlify, set these records and **remove** any old A / AAAA / CNAME that point elsewhere (including old Vercel values).

| Type  | Name | Value                         | Notes                                      |
|-------|------|-------------------------------|--------------------------------------------|
| A     | @    | `75.2.60.5`                   | Netlify load balancer (GoDaddy has no ALIAS) |
| CNAME | www  | `YOUR-SITE.netlify.app`       | Use your real Netlify subdomain            |

Optional alias domains (same pattern at each domain’s DNS):

| Domain                 | Redirects to                                      |
|------------------------|---------------------------------------------------|
| heavydutyumbrellas.com | `https://parkezza.com/galleries/umbrellas`        |
| dogparkstations.com    | `https://parkezza.com/galleries/dog-waste-stations` |

DNS can take from minutes up to 24–48 hours. Netlify issues HTTPS automatically once DNS verifies.

## Image sources

The `organize-images` script pulls from:

- `Documents/01Parkezza/Images`
- `Documents/MainZenon Cursor/ZenonCursorUpload/assets`
- `Documents/pics planters shade tree grates banners cursor`
- `Documents/HeavyDutyUmbrella/assets/images`
- `Documents/Dog Cursor/assets`

Re-run after adding new images to source folders.

**Live site images** go in `public/images/galleries/[category]/`.
