import {Money} from '@shopify/hydrogen';

export function ProductPrice({ price, compareAtPrice, taxRate = 0.19 }) {
  const applyTax = (money) => {
    if (!money) return null;
    const amount = Math.floor(parseFloat(money.amount) * (1 + taxRate));
    return { ...money, amount };
  };

  const formatGermanPrice = (money) => {
    if (!money) return null;
    const amount = Number(money.amount); // turns "1238.0" into 1238
    return `${amount},- €`;
  };

  const taxedPrice = formatGermanPrice(applyTax(price));
  const compareAtFormatted = formatGermanPrice(compareAtPrice); // no tax here

  return (
    <div className="product-price">
      {compareAtFormatted ? (
        <div className="product-price-on-sale">
          {taxedPrice ? <span className="gradient-price">{taxedPrice}</span> : null}
          <s>{compareAtFormatted}</s>
        </div>
      ) : taxedPrice ? (
        <span>{taxedPrice}</span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}