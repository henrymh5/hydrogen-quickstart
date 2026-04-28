(function () {
  function boot() {
    if (window._qiblancoBooted) return;
    window._qiblancoBooted = true;
    var s = document.createElement('script');
    s.async = true;
    s.src =
      'https://t.qiblanco.com/v1/lst/universal-script?ph=5d7ec374b760de265c8e689aea1de481d066f670ad78f9970f2c407e375dcdb6&tag=!clicked&ref_url=' +
      encodeURIComponent(location.href);
    document.head.appendChild(s);
  }
  function ready() {
    if (
      window.Cookiebot &&
      window.Cookiebot.consent &&
      window.Cookiebot.consent.marketing
    )
      boot();
  }
  ready();
  window.addEventListener('CookiebotOnAccept', ready);
  window.addEventListener('CookiebotOnLoad', ready);
})();
