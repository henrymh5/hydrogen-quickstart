import {Suspense, useState} from 'react';
import {Await, NavLink, useAsyncValue, Link} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import {ReviewCount} from './reusables/ReviewCount';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;
  return (
    <>
      <AnnouncementBanner
        announcement={
          <p>
            <ReviewCount /> - Über 12.000 zufriedene Kunden - Jetzt 20 Tage
            risikofrei erleben!
          </p>
        }
        link="/products/qione-2-pro"
      />
      <header className="header">
        <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
          <img
            className="NavLink-logo"
            src="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/01_Logo_2020_Qi_Blanco-black.png?v=1637014505"
            alt="Qi Blanco Logo"
          />
        </NavLink>
        <HeaderMenu
          menu={menu}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </header>
    </>
  );
}

/**
 * Updated HeaderMenu to support nested menu items
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

        const hasChildren = item.items && item.items.length > 0;

        return (
          <MenuItem
            key={item.id}
            item={item}
            url={url}
            hasChildren={hasChildren}
            viewport={viewport}
            close={close}
          />
        );
      })}
    </nav>
  );
}

/**
 * Handles parent items with optional children
 */
function MenuItem({item, url, hasChildren, viewport, close}) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="header-menu-item-wrapper relative">
      <div className="flex items-center justify-between">
        <NavLink
          className="header-menu-item"
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to={url}
        >
          {item.title}
        </NavLink>

        {hasChildren && viewport === 'mobile' && (
          <button
            type="button"
            className="ml-2"
            onClick={toggleOpen}
            aria-label="Toggle submenu"
          >
            {open ? '−' : '+'}
          </button>
        )}
      </div>

      {/* Desktop dropdown */}
      {hasChildren && viewport === 'desktop' && (
        <div className="submenu-wrapper group relative">
          <ul className="absolute left-0 top-full group-hover:block bg-white shadow-lg p-4 z-50 min-w-[200px]">
            {item.items.map((child) => (
              <SubMenuItem key={child.id} item={child} close={close} />
            ))}
          </ul>
        </div>
      )}

      {/* Mobile accordion */}
      {hasChildren && viewport === 'mobile' && open && (
        <ul className="pl-4 border-l border-gray-300">
          {item.items.map((child) => (
            <SubMenuItem key={child.id} item={child} close={close} />
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Submenu link items
 */
function SubMenuItem({item, close}) {
  if (!item.url) return null;

  const url = new URL(item.url).pathname;

  return (
    <li className="py-1">
      <NavLink
        className="header-submenu-item"
        onClick={close}
        prefetch="intent"
        style={activeLinkStyle}
        to={url}
      >
        {item.title}
      </NavLink>
    </li>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      className="openCart"
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shopping-bag-icon lucide-shopping-bag"
      >
        <path d="M16 10a4 4 0 0 1-8 0" />
        <path d="M3.103 6.034h17.794" />
        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
      </svg>{' '}
      <span className="cart-count">
        {count === null ? <span>&nbsp;</span> : count}
      </span>
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function AnnouncementBanner({announcement, link}) {
  return (
    <div className="Header-AnnouncementBanner">
      <Link prefetch="intent" to={link}>
        {announcement}
      </Link>
    </div>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */