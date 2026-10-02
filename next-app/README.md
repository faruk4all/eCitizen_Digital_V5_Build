# eCitizen Digital — Next.js deployment target

This folder provides the Next.js deployment target specified by the approved blueprint. The public static build remains at the project root for instant local preview.

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm start
```

Before deployment, copy the verified tracking/lead configuration into `public/config.js`.
