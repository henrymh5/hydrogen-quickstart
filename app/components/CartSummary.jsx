import {CartForm, Money} from '@shopify/hydrogen';
import {useRef} from 'react';

const CACAO_HANDLES = ['crystal-cacao-awake', 'crystal-cacao-create'];

/**
 * @param {CartSummaryProps}
 */
export function CartSummary({cart, layout}) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';

  // Format as 1.087,- €
  const formatEuroPrice = (money) => {
    if (!money?.amount) return '';
    const amount = Math.floor(parseFloat(money.amount));
    return `${amount.toLocaleString('de-DE')},- €`;
  };

  // Prices from Shopify already include 19% tax.
  // Cacao products should be 7% tax, so recalculate those lines.
  const lines = cart?.lines?.nodes ?? [];
  let correctedTotal = 0;
  for (const line of lines) {
    const handle = line.merchandise?.product?.handle ?? '';
    const gross = parseFloat(line.cost?.totalAmount?.amount ?? '0');
    if (CACAO_HANDLES.includes(handle)) {
      // Remove 19% tax, apply 7%
      correctedTotal += (gross / 1.19) * 1.07;
    } else {
      correctedTotal += gross;
    }
  }

  const currencyCode = cart.cost?.subtotalAmount?.currencyCode ?? 'EUR';
  const taxedSubtotal = {amount: correctedTotal.toFixed(2), currencyCode};

  return (
    <div aria-labelledby="cart-summary" className={className}>
      <div className="cart-aside-subtotal">
       <div>Zwischensumme:</div> {formatEuroPrice(taxedSubtotal)}
      </div>
      <div className="cart-delivery-notes">
        <small className="additional-delivery-notice">
          In 2 bis 3 Tagen bei dir!
        </small>
        <div className="trenner"></div>
        <small className="additional-delivery-notice">
          100% versichterter Versand!
        </small>
      </div>
      <CartCheckoutActions
        subTotal={formatEuroPrice(taxedSubtotal)}
        checkoutUrl={cart.checkoutUrl}
      />
      <PaymentMethods />
    </div>
  );
}

/**
 * @param {{checkoutUrl?: string}}
 */
function CartCheckoutActions({subTotal, checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div className="cartSummaryWrapper">
      <a className="btn--primary" href={checkoutUrl} target="_self">
        <p>Jetzt sicher zur Kasse</p>
      </a>
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="PaymentMethods">
      {/* (all your SVGs remain unchanged) */}
    </div>
  );
}

/**
 * @typedef {{
 *   cart: OptimisticCart<CartApiQueryFragment | null>;
 *   layout: CartLayout;
 * }} CartSummaryProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('~/components/CartMain').CartLayout} CartLayout */
/** @typedef {import('@shopify/hydrogen').OptimisticCart} OptimisticCart */