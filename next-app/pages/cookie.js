import Head from 'next/head';
import Script from 'next/script';

export default function Page() {
  return <>
    <Head>
      <title>Cookie & Tracking Disclosure | eCitizen Digital</title>
      <meta name="description" content={'eCitizen Digital cookie and tracking disclosure.'} />
      <link rel="canonical" href="https://ecitizendigital.com/cookie" />
    </Head>
    <div dangerouslySetInnerHTML={{__html: '<a class="skip" href="#main">Skip to content</a><header><div class="container nav"><a class="brand" href="/"><img alt="eCitizen Digital" src="/assets/ecitizen-lockup-horizontal-reversed.png"/></a><nav aria-label="Primary" class="navlinks"><a href="/">Home</a><a href="/services">Services</a><a href="/packages">Packages</a><a href="/portfolio">Portfolio</a><a href="/process">Process</a><a href="/blog">Insights</a><a href="/about">About</a></nav><div class="navcta"><a class="btn btn-primary" href="/contact">Book a Consultation</a><button aria-expanded="false" aria-label="Open menu" class="menu" data-menu="">☰</button></div></div></header><main id="main"><section class="section"><div class="container legal"><span class="eyebrow">Privacy</span><h1>Cookie &amp; Tracking Disclosure</h1><p>This page describes the optional measurement technologies planned for the eCitizen Digital website.</p><h2>Measurement</h2><p>When configured and accepted, the site may use Google Analytics, Google Tag Manager, Meta Pixel and TikTok Pixel to understand traffic, campaign attribution, conversion events and website performance.</p><h2>Your choice</h2><p>Optional measurement should load only after consent. You can continue browsing without accepting optional measurement. Essential technical functions do not depend on advertising cookies.</p><h2>Configuration</h2><p>The production configuration must contain the verified IDs supplied by the relevant platform accounts. Empty IDs do not load third-party tracking.</p><h2>Contact</h2><p>For questions about submitted information or tracking, use the <a href="/contact">contact page</a>.</p></div></section></main><footer><div class="container"><div class="footer-bottom"><span>© <span data-year=""></span> eCitizen Digital.</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/cookie">Cookies</a> · <a href="/lead-data">Lead Data</a></span></div></div></footer>'}} />
    <Script src="/config.js" strategy="beforeInteractive" />
    <Script src="/app.js" strategy="afterInteractive" />
  </>;
}
