# eCitizen Digital — V5 Final Build

A production-focused, mobile-first eCitizen Digital website with a premium dark visual system, refined brand motion, semantic structure, SEO foundations, accessibility support, privacy-aware analytics hooks and deployment configuration.

## Local preview

```bash
python server.py
```

Open `http://127.0.0.1:8000`.

## Before launch — required configuration

1. Edit `config.js` and add verified values for:
   - Google Analytics 4 Measurement ID
   - Google Tag Manager ID
   - Meta Pixel ID
   - TikTok Pixel ID (if used)
   - Google Search Console verification token
   - Production lead endpoint / Google Apps Script endpoint
2. Replace placeholder legal text in Privacy Policy and Terms with approved production copy.
3. Verify the lead endpoint with real submissions before advertising traffic is sent.
4. Add the verified domain to Google Search Console and submit `/sitemap.xml`.
5. Configure the domain, HTTPS and DNS at the production host.
6. Run Lighthouse / PageSpeed, keyboard testing and real-device responsive QA after deployment.

## Tracking behavior

Third-party measurement is intentionally not loaded when IDs are blank. When an ID is configured, optional tracking is loaded only after the visitor accepts measurement. CTA and lead events are prepared for GA4/GTM/Meta Pixel.

## SEO

Included: page-specific titles/descriptions, canonical URLs, Open Graph, Twitter cards, JSON-LD on key pages, robots.txt, XML sitemap, favicon and web manifest.

## Security

`vercel.json` contains baseline security headers for Vercel. The local Python server also sends basic security headers for development preview.

## Important

The visual website is ready for final implementation/QA, but third-party account IDs, lead endpoint credentials, legal approval and production domain verification are external configuration items and cannot be invented by the build.


## CTA setup
- Header: Free Audit + click-to-call +880 1313 886828
- Floating/footer: Let's Talk via WhatsApp → https://wa.me/8801313886828
- Free Audit form submits through `config.js` → `leadEndpoint` when configured.


## Insights / SEO content system
- 10 production article pages are included under `/insights/`.
- 5 articles focus on Kishoreganj Digital Intelligence using public/official sources and explicitly avoiding fabricated local statistics.
- 5 articles focus on Bangladesh-wide SEO and digital growth authority.
- Each article has unique title, meta description, canonical URL, Open Graph/Twitter metadata, Article JSON-LD, primary/secondary SEO topics, internal conversion links and source/methodology notes.
- `sitemap.xml` includes all 10 article URLs.
