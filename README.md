# SBTaxPros — Deploy to Netlify

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Netlify
1. Create a new site from Git in Netlify and point it to this repo (or drag-and-drop the `dist/` folder after building).
2. Build command: `npm run build`
3. Publish directory: `dist`

## Custom Domain (sbtaxpros.net)
- In Netlify, go to **Site settings → Domain management → Add custom domain** and enter `sbtaxpros.net` and `www.sbtaxpros.net`.
- Follow Netlify’s DNS instructions shown in the UI (recommended: use Netlify DNS to get automatic SSL). If you keep DNS at your registrar:
  - Set **CNAME** for `www` → your-site-name.netlify.app
  - Point the **apex/root** `sbtaxpros.net` as Netlify instructs in the dashboard (values can change; use the exact records they show).
- Enable HTTPS (Netlify issues a free certificate).
- Set primary domain to `sbtaxpros.net` and keep `www` as an alias/redirect.
