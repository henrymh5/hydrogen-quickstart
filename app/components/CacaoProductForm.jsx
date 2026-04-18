import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';

export const SIZE_OPTIONS = [
  {value: '3', label: '3x 420g | 30% Rabatt | 53,-€ pro Packung'},
  {value: '2', label: '2x 420g | 20% Rabatt | 61,-€ pro Packung'},
  {value: '1', label: '1x 420g | 76,- € pro Packung'},
];

export const CACAO_PRICING = {
  '1': {price: '76,-', priceNum: 76, per100g: '18,00€ / 100g', badge: 'Exklusiv', badgeStyle: 'gold'},
  '2': {price: '61,-', priceNum: 61, compareAt: '76,-', per100g: '14,52€ / 100g', badge: 'Angebot', badgeStyle: 'red'},
  '3': {price: '53,-', priceNum: 53, compareAt: '76,-', per100g: '12,62€ / 100g', badge: 'Bestseller Angebot', badgeStyle: 'gradient'},
};

/**
 * Custom add-to-cart form for Crystal Cacao products.
 * No Shopify variants — the dropdown controls the quantity
 * of the single product variant added to the cart.
 *
 * @param {{ selectedVariant: object, quantity: string, onQuantityChange: (val: string) => void }} props
 */
export function CacaoProductForm({selectedVariant, quantity, onQuantityChange}) {
  const {open} = useAside();

  return (
    <div className="product-form">
      <div className="product-options">
        <h5>Größe</h5>
        <select
          className="CacaoVariantSelect"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
        >
          {SIZE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="AddToCartButtonWrapper">
        <AddToCartButton
          disabled={!selectedVariant || !selectedVariant.availableForSale}
          onClick={() => {
            open('cart');
          }}
          lines={
            selectedVariant
              ? [
                  {
                    merchandiseId: selectedVariant.id,
                    quantity: parseInt(quantity, 10),
                    selectedVariant,
                  },
                ]
              : []
          }
        >
          {selectedVariant?.availableForSale
            ? 'In den Warenkorb legen'
            : 'Ausverkauft'}
        </AddToCartButton>
      </div>
    </div>
  );
}
