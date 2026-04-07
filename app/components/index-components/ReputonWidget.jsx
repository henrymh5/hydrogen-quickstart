import {useEffect} from 'react';

export function ReputonWidget() {
  useEffect(() => {
    const scriptAlreadyLoaded = document.querySelector('script[src*="reputon"]');

    if (scriptAlreadyLoaded) {
      // Script already in DOM after SPA navigation — trigger re-scan if the widget exposes an init API
      if (window.GRW?.init) window.GRW.init();
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://cdn.grw.reputon.com/assets/widget.js?shop=qi-blanco.myshopify.com';
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="reputon-google-reviews-widget"
      data-type="carousel"
      data-content-index="1"
      data-theme="light"
      data-autoscroll="true"
      data-review-photos-type="small"
      data-write-review="true"
      data-fixed-reviews-height="false"
      data-delay="5"
      data-transparency="1"
      data-font="default"
      data-fluid-scrolling="false"
      data-has-shadow="false"
      data-solid-shadow="false"
      data-rating-type="stars"
      data-header-type="top"
      data-variant="carousel"
    />
  );
}
