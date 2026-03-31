import {Suspense} from 'react';
import {Await, NavLink, Link} from 'react-router';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="NormalSectionSize">
              <h3>
                Das “International EMF Project” der Weltgesundheitsorganisation
                [WHO]:{' '}
              </h3>
              <p>
                “Mögliche gesundheitliche Auswirkungen der Exposition gegenüber
                statischen und zeitveränderlichen elektrischen und magnetischen
                Feldern müssen wissenschaftlich geklärt werden.
                Elektromagnetische Felder aller Frequenzen stellen eine der
                häufigsten und am schnellsten wachsenden Umwelteinflüsse dar,
                über die sich Befürchtungen und Spekulationen verbreiten. Alle
                Bevölkerungsgruppen der Welt sind heute in unterschiedlichem
                Maße EMF-Exposition ausgesetzt, und die Werte werden mit
                fortschreitender Technologie weiter zunehmen. Daher könnte
                selbst eine kleine gesundheitliche Folge einer EMF-Exposition
                große Auswirkungen auf die öffentliche Gesundheit haben.”
                Erfahre mehr über die Initiative hier.
              </p>
            </div>
            <div className="NormalSectionSize">
              <h3 className='mt-2'>Disclaimer</h3>
              <p>Die hier vorgestellte Technologie entspricht (wie
              beispielsweise die Homöopathie, die Bioresonanz, Bereiche der
              Akupunktur) nicht der schulwissenschaftlichen Auffassung und
              Lehrmeinung. Der Einsatz der Qi Blanco® Produkte beinhaltet keine
              Therapie und ersetzt nicht die Konsultation eines Arztes oder
              Heilpraktikers. <br />
              Alle erwähnten Aussagen oder Produkte sollen das
              allgemeine Wohlbefinden unterstützen und beabsichtigen nicht,
              einen Zustand oder eine Krankheit zu behandeln, zu
              diagnostizieren, zu lindern, zu verhindern oder zu heilen.</p>
              <p className='mt-2'>
              1. Gilt
              für Lieferungen in folgendes Land: Deutschland. Lieferzeiten für
              andere Länder und Informationen zur Berechnung des Liefertermins
              hier einsehen: <Link to="/policies/shipping-policy">Liefer- und Zahlungsbedingungen</Link></p> <p className='mt-2'> 2. Die Möglichkeit
              der Ratenzahlung wird durch unsere externen Partner PayPal und
              Klarna angeboten und abgewickelt. Eine Genehmigung für
              Ratenzahlungen ist nicht garantiert und erfordert eine separate
              Überprüfung durch den jeweiligen Anbieter. Bei Fragen zu
              Ratenzahlungen kontaktieren Sie bitte direkt Klarna oder PayPal.
              Ratenzahlung aktuell nur für Kunden mit deutschem Wohnsitz
              möglich. </p> <p className='mt-2'>3. Bezahlmethoden</p>
            </div>
            {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )}
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
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
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
