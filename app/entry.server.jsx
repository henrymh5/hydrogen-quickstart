import {ServerRouter} from 'react-router';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {EntryContext} reactRouterContext
 * @param {AppLoadContext} context
 */
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  reactRouterContext,
  context,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    defaultSrc: [
      "'self'",
      'https://cdn.shopify.com',
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
      'https://cdn.grw.reputon.com',
      'https://qiblanco-only-rating-serpapi.vercel.app',
      'https://qiblanco.activehosted.com',
      'https://consent.cookiebot.com',
      'https://consentcdn.cookiebot.com',
      'https://static.hotjar.com',
      'https://script.hotjar.com',
      'https://t.qiblanco.com',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
      'https://*.reputon.com',
      'https://qiblanco.activehosted.com',
    ],
    frameSrc: [
      "'self'",
      'https://www.youtube.com',
      'https://www.youtube-nocookie.com',
      'https://player.vimeo.com',
      'https://*.reputon.com',
      'https://consentcdn.cookiebot.com',
      'https://vars.hotjar.com',
    ],
    connectSrc: [
      "'self'",
      'https://monorail-edge.shopifysvc.com',
      'https://qiblanco-only-rating-serpapi.vercel.app',
      'https://*.reputon.com',
      'https://qiblanco-video.imgix.video',
      'https://*.imgix.video',
      'https://qiblanco.activehosted.com',
      'https://*.myshopify.dev',
      'https://*.vimeo.com',
      'https://*.vimeocdn.com',
      'https://*.hotjar.com',
      'https://*.hotjar.io',
      'wss://*.hotjar.com',
      'https://t.qiblanco.com',
      'https://consent.cookiebot.com',
    ],
    mediaSrc: [
      "'self'",
      'blob:',
      'https://cdn.shopify.com',
      'https://*.imgix.video',
    ],
    fontSrc: [
      "'self'",
      'data:',
      'https://cdn.shopify.com',
      'https://cdn.grw.reputon.com',
      'https://fonts.gstatic.com',
      'https://script.hotjar.com',
    ],
    imgSrc: [
      "'self'",
      'data:',
      'https://cdn.shopify.com',
      'https://*.googleusercontent.com',
      'https://lh3.googleusercontent.com',
      'https://maps.googleapis.com',
      'https://maps.gstatic.com',
      'https://cdn.grw.reputon.com',
      'https://i.vimeocdn.com',
      'https://script.hotjar.com',
    ],
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <ServerRouter
        context={reactRouterContext}
        url={request.url}
        nonce={nonce}
      />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

/** @typedef {import('@shopify/remix-oxygen').AppLoadContext} AppLoadContext */
/** @typedef {import('react-router').EntryContext} EntryContext */
