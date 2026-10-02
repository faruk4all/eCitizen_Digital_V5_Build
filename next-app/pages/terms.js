import Head from 'next/head';
import Script from 'next/script';

export default function Page() {
  return <>
    <Head>
      <title>Terms & Conditions | eCitizen Digital</title>
      <meta name="description" content={'eCitizen Digital terms and conditions for website use and services.'} />
      <link rel="canonical" href="https://ecitizendigital.com/terms" />
    </Head>
    <div dangerouslySetInnerHTML={{__html: '<div class="progress"></div><a class="skip" href="#main">Skip to content</a><header><div class="container nav"><a class="brand" href="/"><img alt="eCitizen Digital" src="/assets/ecitizen-lockup-horizontal-reversed.png"/></a><nav aria-label="Primary" class="navlinks"><a class="" href="/">Home</a><a class="" href="/services">Services</a><a class="" href="/packages">Packages</a><a class="" href="/portfolio">Portfolio</a><a class="" href="/process">Process</a><a class="" href="/blog">Insights</a><a class="" href="/about">About</a></nav><div class="navcta"><a class="btn btn-primary" href="/contact">Book a Consultation</a><button aria-label="Menu" class="menu" data-menu="">☰</button></div></div></header><main id="main"><section class="section"><div class="container"><div class="section-head"><div><span class="eyebrow">Legal</span><h1 style="font-size:clamp(48px,7vw,80px);line-height:.92;letter-spacing:-.06em;margin:12px 0">Terms &amp; Conditions</h1></div><p>This prototype page provides a clear structure for production legal content.</p></div><div class="glass" style="padding:34px"><h3>General information</h3><p style="color:var(--muted)">Replace this placeholder with approved production legal copy before launch. Do not publish placeholder legal language.</p></div></div></section></main><footer><div class="container"><div class="footer-grid"><div class="footer-brand"><img alt="eCitizen Digital" src="/assets/ecitizen-lockup-horizontal-reversed.png"/><p>Digital Growth Partner for SMEs. Strategy, technology and creative execution built around business outcomes.</p><p style="color:#c8ced7;font-weight:700">We Grow Brands, You Grow Business.</p></div><div class="footer-col"><h4>Explore</h4><a href="/services">Services</a><a href="/packages">Packages</a><a href="/portfolio">Portfolio</a><a href="/process">Process</a></div><div class="footer-col"><h4>Learn</h4><a href="/blog">Insights</a><a href="/faq">FAQ</a><a href="/about">About</a></div><div class="footer-col"><h4>Start</h4><a href="/contact">Book a Consultation</a><a href="mailto:hi@ecitizen.digital">hi@ecitizen.digital</a><a href="/contact">Contact</a></div></div><div class="footer-bottom"><span>© <span data-year=""></span> eCitizen Digital.</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/cookie">Cookies</a> · <a href="/lead-data">Lead Data</a></span></div></div></footer><div class="toast"></div>'}} />
    <Script src="/config.js" strategy="beforeInteractive" />
    <Script src="/app.js" strategy="afterInteractive" />
  </>;
}
