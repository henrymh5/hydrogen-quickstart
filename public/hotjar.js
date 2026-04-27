(function (h, o, t, j) {
  function boot() {
    if (h._hjBooted) return;
    h._hjBooted = true;
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = {hjid: 1218483, hjsv: 6};
    var a = o.getElementsByTagName('head')[0];
    var r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  }
  function ready() {
    if (h.Cookiebot && h.Cookiebot.consent && h.Cookiebot.consent.statistics)
      boot();
  }
  ready();
  h.addEventListener('CookiebotOnAccept', ready);
  h.addEventListener('CookiebotOnLoad', ready);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
