/*
 * Consentement cookies Jardineo.
 * Google Tag Manager (GA4) n'est charge qu'apres acceptation explicite.
 * Le choix est conserve 6 mois dans le navigateur (localStorage).
 * Tout element portant [data-cookie-settings] rouvre le bandeau.
 */
(function () {
  var GTM_ID = 'GTM-TT6MWVH4';
  var KEY = 'jardineo_consent';
  var MAX_AGE = 1000 * 60 * 60 * 24 * 182; // ~6 mois

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var c = JSON.parse(raw);
      if (!c || (c.v !== 'granted' && c.v !== 'denied')) return null;
      if (Date.now() - c.t > MAX_AGE) return null;
      return c.v;
    } catch (e) {
      return null;
    }
  }

  function write(v) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() }));
    } catch (e) {}
  }

  function loadGtm() {
    if (window.__jardineoGtmLoaded) return;
    window.__jardineoGtmLoaded = true;
    var w = window, d = document, l = 'dataLayer';
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var j = d.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    d.head.appendChild(j);
  }

  function clearAnalyticsCookies() {
    var host = location.hostname.split('.');
    var domains = [location.hostname];
    if (host.length > 1) domains.push('.' + host.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid') {
        domains.forEach(function (dom) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + dom;
        });
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }

  var STYLE =
    '#jd-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;' +
    'background:#fffcf8;color:#0f1a13;border:2.5px solid #14532d;border-radius:20px;box-shadow:5px 5px 0 #14532d;' +
    'padding:18px 20px;font:15px/1.5 Inter,system-ui,-apple-system,Segoe UI,sans-serif}' +
    '#jd-consent h2{margin:0 0 6px;font-size:1.05rem}' +
    '#jd-consent p{margin:0 0 14px;color:#4b5563}' +
    '#jd-consent a{color:#167a3a;text-decoration:underline}' +
    '#jd-consent .jd-actions{display:flex;flex-wrap:wrap;gap:10px}' +
    '#jd-consent button{flex:1 1 140px;cursor:pointer;font:inherit;font-weight:600;padding:10px 16px;border-radius:999px;' +
    'border:2.5px solid #14532d;background:#fffcf8;color:#14532d}' +
    '#jd-consent button:hover,#jd-consent button:focus-visible{background:#e6f8ee;outline:2px solid #1fa951;outline-offset:2px}' +
    '@media (prefers-color-scheme:dark){#jd-consent{background:#1a221a;color:#e2f0e8;border-color:#8ee4b7;box-shadow:5px 5px 0 #176b3a}' +
    '#jd-consent p{color:#b6c4bb}#jd-consent a{color:#8ee4b7}' +
    '#jd-consent button{background:#1a221a;color:#8ee4b7;border-color:#8ee4b7}#jd-consent button:hover,#jd-consent button:focus-visible{background:#20382b}}';

  function closeBanner() {
    var el = document.getElementById('jd-consent');
    if (el) el.remove();
  }

  function choose(v) {
    var previous = read();
    write(v);
    closeBanner();
    if (v === 'granted') {
      loadGtm();
    } else if (previous === 'granted' || window.__jardineoGtmLoaded) {
      clearAnalyticsCookies();
      location.reload();
    }
  }

  function openBanner() {
    if (document.getElementById('jd-consent')) return;
    if (!document.getElementById('jd-consent-style')) {
      var st = document.createElement('style');
      st.id = 'jd-consent-style';
      st.textContent = STYLE;
      document.head.appendChild(st);
    }
    var box = document.createElement('div');
    box.id = 'jd-consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-labelledby', 'jd-consent-title');
    box.innerHTML =
      '<h2 id="jd-consent-title">Un cookie pour nous aider ?</h2>' +
      '<p>Nous mesurons la fréquentation du site avec Google Analytics, uniquement si vous l’acceptez. ' +
      'Aucune publicité, aucune revente. <a href="/confidentialite">En savoir plus</a>.</p>' +
      '<div class="jd-actions">' +
      '<button type="button" data-jd="denied">Refuser</button>' +
      '<button type="button" data-jd="granted">Accepter</button>' +
      '</div>';
    box.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('button[data-jd]');
      if (b) choose(b.getAttribute('data-jd'));
    });
    document.body.appendChild(box);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (t) {
      e.preventDefault();
      openBanner();
    }
  });

  function init() {
    var c = read();
    if (c === 'granted') loadGtm();
    else if (c === null) openBanner();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
