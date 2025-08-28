// Virtual entry point for the app
import {storefrontRedirect} from '@shopify/hydrogen';
import {createRequestHandler} from '@shopify/remix-oxygen';
import {createAppLoadContext} from '~/lib/context';

/**
 * Export a fetch handler in module format.
 */
export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} executionContext
   * @return {Promise<Response>}
   */
  async fetch(request, env, executionContext) {
    try {
      const appLoadContext = await createAppLoadContext(
        request,
        env,
        executionContext,
      );

      /**
       * Create a Remix request handler and pass
       * Hydrogen's Storefront client to the loader context.
       */
      const handleRequest = createRequestHandler({
        // eslint-disable-next-line import/no-unresolved
        build: await import('virtual:react-router/server-build'),
        mode: process.env.NODE_ENV,
        getLoadContext: () => appLoadContext,
      });

      const response = await handleRequest(request);

      // ✅ Inject Content Security Policy to allow YouTube iframe
      response.headers.set(
        'Content-Security-Policy',
        [
          "default-src 'self' https://cdn.shopify.com;",
          "script-src 'self' 'unsafe-inline';",
          "style-src 'self' 'unsafe-inline';",
          "frame-src https://www.youtube.com https://www.youtube-nocookie.com;",
        ].join(' ')
      );

      if (appLoadContext.session.isPending) {
        response.headers.set(
          'Set-Cookie',
          await appLoadContext.session.commit(),
        );
      }

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({
          request,
          response,
          storefront: appLoadContext.storefront,
        });
      }

      return response;
    } catch (error) {
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};