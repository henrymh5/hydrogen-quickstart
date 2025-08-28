import {Await, useLoaderData, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';
import {HerobannerFeatured} from '~/components/index-components/HerobannerFeatured';
import {ZellDiagramme} from '~/components/index-components/ZellDiagramme';
import {YoutubeIframe} from '~/components/reusables/YoutubeIframe';
import { LogoBar } from '~/components/reusables/LogoBar';
import { Richtext } from '~/components/reusables/Richtext';
import { InfoSlider } from '~/components/index-components/InfoSlider';
import { ScrollMikroskopVideo } from '~/components/index-components/ScrollMikroskopVideo';
import { Studien } from '~/components/reusables/Studien';
import { FeaturedProduct } from '~/components/index-components/FeaturedProduct';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <HerobannerFeatured />
      <ZellDiagramme/>
      <LogoBar/>
      <Richtext alignment="center" text={<h2>"87 % der Nutzer berichten von positiven <br /> Veränderungen in ihrem Wohlbefinden nach der <br /> Anwendung der Qi Blanco® Produkte."</h2>} />
      <InfoSlider />
      <YoutubeIframe link="https://www.youtube.com/embed/jyLyXZqHxaw?si=2ZVH9xtaSaEMmfTQ&amp;controls=0" />
      <YoutubeIframe link="https://www.youtube.com/embed/aG36zJKxDzg?si=cF6ATzVJfU8kpZUd&amp;controls=0" />
      <YoutubeIframe link="https://www.youtube.com/embed/zIfDQ1N60fI?si=2ZVH9xtaSaEMmfTQ&amp;controls=0" />
      <ScrollMikroskopVideo />
      <Studien headline="Wirkung an menschlichen Zellen bestätigt!" />
      <FeaturedProduct linkKaufseite="/products/qione-2-pro" linkDetailseite="/pages/qione" title="QiOne® 2 Pro" label="Kompakt. Innovativ. Stark." bildRechts="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/qiblanco-com-qione-2-pro-transparent_1.webp?v=1666591476" bildLinks="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiOne2Pro_02_transparent_1.webp?v=1666591442" />
      <FeaturedProduct linkKaufseite="/products/qibracelet" linkDetailseite="/pages/qibracelet" title="Das QiBracelet®" label="Eleganz und Schutz - dein Support." bildRechts="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/01_2048px-Alpha_1.webp?v=1667284638" bildLinks="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/02_2048px-Alpha_1.webp?v=1667284591" />
      <FeaturedProduct linkKaufseite="/products/qihome" linkDetailseite="/pages/qihome" title="Das QiHome® Air" label="Gesundes Zuhause, produktives Umfeld." bildRechts="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiHomeAir-Front-Alpha-Web2_1024x1024_741c3ad5-b5f7-49bf-89d4-c9b4a961545b.webp?v=1669000329" bildLinks="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiHome_side_alpha2-800x868-1_1.png?v=1667284770" />
    </div> 
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
