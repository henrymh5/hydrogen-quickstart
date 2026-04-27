(function () {
  function syncShopifyConsent() {
    var cb = window.Cookiebot;
    if (!cb || !cb.consent) return false;
    var sp = window.Shopify && window.Shopify.customerPrivacy;
    if (!sp || typeof sp.setTrackingConsent !== 'function') return false;
    sp.setTrackingConsent(
      {
        analytics: !!cb.consent.statistics,
        marketing: !!cb.consent.marketing,
        preferences: !!cb.consent.preferences,
        sale_of_data: !!cb.consent.marketing,
      },
      function () {},
    );
    return true;
  }
  function trySync() {
    if (syncShopifyConsent()) return;
    var attempts = 0;
    var iv = setInterval(function () {
      attempts++;
      if (syncShopifyConsent() || attempts > 40) clearInterval(iv);
    }, 250);
  }
  window.addEventListener('CookiebotOnAccept', trySync);
  window.addEventListener('CookiebotOnDecline', trySync);
  window.addEventListener('CookiebotOnConsentReady', trySync);
})();
