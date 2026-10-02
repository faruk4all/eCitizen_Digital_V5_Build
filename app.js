(() => {
  const config = window.ECITIZEN_CONFIG || {};
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const progress = $('.progress');
  const updateProgress = () => {
    if (!progress) return;
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${h > 0 ? (scrollY / h) * 100 : 0}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }), { threshold: .08 })
    : null;
  $$('.reveal').forEach(x => io ? io.observe(x) : x.classList.add('visible'));

  // Mobile navigation
  $$('.menu[data-menu]').forEach(btn => btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.textContent = open ? '×' : '☰';
  }));
  $$('.navlinks a').forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    const btn = $('.menu[data-menu]');
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
      btn.textContent = '☰';
    }
  }));

  // Home brand motion: pointer-responsive, lightweight, no extra libraries.
  const stage = $('[data-brand-motion]');
  if (stage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - .5) * 2;
      const y = ((e.clientY - r.top) / r.height - .5) * 2;
      stage.style.setProperty('--mx', `${x.toFixed(3)}`);
      stage.style.setProperty('--my', `${y.toFixed(3)}`);
    }, { passive: true });
    stage.addEventListener('pointerleave', () => {
      stage.style.setProperty('--mx', '0');
      stage.style.setProperty('--my', '0');
    }, { passive: true });
  }

  const methods = {
    understand:{title:'Understand',text:'Start with the business: audience, offer, market position, competition and the bottleneck that is limiting growth.',meta:['Research','Positioning','Audience','Objectives']},
    build:{title:'Build',text:'Turn the strategy into credible digital assets: brand, website, landing pages, content systems and conversion foundations.',meta:['Website','Brand','Content','Conversion']},
    reach:{title:'Reach',text:'Put the right message in front of the right people through organic distribution, paid media, search and targeted campaigns.',meta:['Meta','Google','SEO','Distribution']},
    convert:{title:'Convert',text:'Connect attention to action with clear offers, landing experiences, lead capture and a journey that reduces friction.',meta:['Offers','Landing pages','Lead capture','UX']},
    optimize:{title:'Optimize',text:'Use performance signals to identify what deserves more investment, what should change and where the customer journey leaks.',meta:['Analytics','Testing','Iteration','Reporting']},
    grow:{title:'Grow',text:'Feed the intelligence back into the system. The next cycle becomes more informed, more focused and more scalable.',meta:['Compounding','Scale','Retention','Next move']}
  };
  function renderMethod(key) {
    const p = $('[data-method-panel]');
    if (!p) return;
    const m = methods[key] || methods.understand;
    p.innerHTML = `<span class="eyebrow">Growth operating system</span><div class="big">${m.title}</div><p>${m.text}</p><div class="method-meta">${m.meta.map(x => `<span class="chip">${x}</span>`).join('')}</div>`;
    $$('.method-btn').forEach(b => {
      const active = b.dataset.method === key;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });
  }
  if ($('[data-method-panel]')) {
    renderMethod('understand');
    $$('.method-btn').forEach(b => b.addEventListener('click', () => renderMethod(b.dataset.method)));
  }

  // FAQ accordion with accessible state.
  $$('.faq-q').forEach(b => b.addEventListener('click', () => {
    const item = b.parentElement;
    const open = item.classList.toggle('open');
    b.setAttribute('aria-expanded', String(open));
  }));

  // Optional analytics integrations. Nothing loads until a real ID is supplied and consent is granted.
  function loadScript(src, id) {
    if (document.getElementById(id)) return;
    const s = document.createElement('script'); s.async = true; s.src = src; s.id = id; document.head.appendChild(s);
  }
  function initTracking() {
    if (localStorage.getItem('ec_tracking_consent') !== 'granted') return;
    if (config.gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(config.gtmId)}`, 'ec-gtm');
    }
    if (!config.gtmId && config.ga4MeasurementId && !window.__ecGA4) {
      window.__ecGA4 = true; window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date()); gtag('config', config.ga4MeasurementId, { anonymize_ip: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId)}`, 'ec-ga4');
    }
    if (config.metaPixelId && !window.fbq) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', config.metaPixelId); fbq('track', 'PageView');
    }
    if (config.tiktokPixelId && !window.__ecTikTok) {
      window.__ecTikTokId = config.tiktokPixelId;
      !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie'];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r='https://analytics.tiktok.com/i18n/pixel/events.js';ttq._i=ttq._i||{};ttq._i[e]=[];ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var s=d.createElement('script');s.type='text/javascript';s.async=!0;s.src=r+'?sdkid='+e+'&lib='+t;var f=d.getElementsByTagName('script')[0];f.parentNode.insertBefore(s,f)};ttq.load(w.__ecTikTokId);ttq.page()}(window,document,'ttq');
      window.__ecTikTok = true;
    }
  }

  // Minimal consent control. It appears only when a tracking integration is configured.
  const trackingConfigured = !!(config.gtmId || config.ga4MeasurementId || config.metaPixelId || config.tiktokPixelId);
  if (trackingConfigured && !localStorage.getItem('ec_tracking_consent')) {
    const banner = document.createElement('aside');
    banner.className = 'consent-banner glass';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie and tracking preferences');
    banner.innerHTML = `<div><strong>Privacy & measurement</strong><p>We use optional analytics and marketing measurement to understand site performance. You can accept or continue without it.</p><a href="cookie.html">Learn more</a></div><div class="consent-actions"><button class="btn btn-ghost" data-consent="declined">Continue without</button><button class="btn btn-primary" data-consent="granted">Accept measurement</button></div>`;
    document.body.classList.add('consent-visible');
    document.body.appendChild(banner);
    $$('[data-consent]', banner).forEach(b => b.addEventListener('click', () => {
      localStorage.setItem('ec_tracking_consent', b.dataset.consent);
      banner.remove();
      document.body.classList.remove('consent-visible');
      if (b.dataset.consent === 'granted') initTracking();
    }));
  } else {
    initTracking();
  }

  // CTA measurement. Works with GA4 and/or GTM when configured.
  $$('[data-track]').forEach(el => el.addEventListener('click', () => {
    const eventName = el.dataset.track;
    if (window.gtag && config.ga4MeasurementId) gtag('event', eventName);
    if (window.dataLayer && config.gtmId) dataLayer.push({ event: eventName });
    if (window.fbq && config.metaPixelId) fbq('trackCustom', eventName);
  }));

  const form = $('#leadForm');
  const toast = $('.toast');
  if (form) form.addEventListener('submit', async e => {
    e.preventDefault();
    const button = $('button[type="submit"]', form);
    const original = button ? button.textContent : '';
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.page = location.href; payload.submittedAt = new Date().toISOString();
    let ok = false;
    if (config.leadEndpoint) {
      try {
        const res = await fetch(config.leadEndpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
        ok = res.ok;
      } catch (_) {}
    }
    if (toast) {
      toast.textContent = ok
        ? payload.intent === 'free_audit' ? 'Thanks — your free audit request has been sent.' : 'Thanks — your enquiry has been sent.'
        : 'The form is ready. Connect the lead endpoint in config.js to receive enquiries.';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4500);
    }
    if (ok) form.reset();
    if (button) { button.disabled = false; button.textContent = original; }
    if (ok) {
      if (window.gtag) gtag('event', payload.intent === 'free_audit' ? 'free_audit_requested' : 'generate_lead');
      if (window.fbq) fbq('track', 'Lead');
      if (window.dataLayer) dataLayer.push({ event: payload.intent === 'free_audit' ? 'free_audit_requested' : 'generate_lead' });
    }
  });

  $$('[data-year]').forEach(x => x.textContent = new Date().getFullYear());

  // Add Search Console verification when configured.
  if (config.searchConsoleVerification) {
    const m = document.createElement('meta');
    m.name = 'google-site-verification'; m.content = config.searchConsoleVerification; document.head.appendChild(m);
  }
})();
