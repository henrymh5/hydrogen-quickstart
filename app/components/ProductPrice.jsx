import {Money} from '@shopify/hydrogen';

export function ProductPrice({ price, compareAtPrice, taxRate = 0.19 }) {
  const applyTax = (money) => {
    if (!money) return null;
    const amount = Math.floor(parseFloat(money.amount) * (1 + taxRate)); // round down
    return { ...money, amount };
  };

  const formatGermanPrice = (money) => {
    if (!money) return null;
    return `${money.amount},- €`;
  };

  const taxedPrice = formatGermanPrice(applyTax(price));
  const taxedCompareAtPrice = formatGermanPrice((compareAtPrice));

  return (
    <div className="product-price">
      {taxedCompareAtPrice ? (
        <div className="product-price-on-sale">
          {taxedPrice ? <span className='gradient-price'>{taxedPrice}</span> : null}
          <s>{taxedCompareAtPrice}</s>
        </div>
      ) : taxedPrice ? (
        <span>{taxedPrice}</span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}