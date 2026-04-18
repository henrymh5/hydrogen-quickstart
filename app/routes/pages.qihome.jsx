import {useLoaderData} from 'react-router';
import {QiHomeLanding} from '~/components/index-components/detailseiten/QiHomeLanding';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `QiHome® Air | Qi Blanco UG (haftungsbeschränkt)`},
    {
      rel: 'canonical',
      href: `/pages/qihome`,
    },
  ];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args, 'qihome');
  return {...deferredData, ...criticalData};
}

/**
 * @param {LoaderFunctionArgs} args
 * @param {string} handle
 */
async function loadCriticalData({context, request}, handle) {
  const [{page}] = await Promise.all([
    context.storefront.query(PAGE_QUERY, {
      variables: {handle},
    }),
  ]);

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: page});

  return {page};
}

function loadDeferredData({context}) {
  return {};
}

export default function QiHomePage() {
  const {page} = useLoaderData();

  return (
    <>
      <QiHomeLanding />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      handle
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
