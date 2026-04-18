import {CACAO_PRICING} from './CacaoProductForm';

export function CacaoPriceDisplay({quantity}) {
  const pricing = CACAO_PRICING[quantity];

  return (
    <div className="Bestseller-Price">
      <div className="CacaoPriceMain">
        <span className={`CacaoPriceCurrent ${pricing.compareAt ? 'sale' : 'exclusive'}`}>
          {pricing.price} €
        </span>
        {pricing.compareAt && (
          <span className="CacaoPriceCompare">{pricing.compareAt} €</span>
        )}
      </div>
      <div className={`BestsellerLabel BestsellerLabel--${pricing.badgeStyle}`}>
        {pricing.badge}
      </div>
      <div className="CacaoPricePer100g">{pricing.per100g}</div>
    </div>
  );
}
