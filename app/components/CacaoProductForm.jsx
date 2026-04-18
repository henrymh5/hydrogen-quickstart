import {useState} from 'react';
import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';

const SIZE_OPTIONS = [
  {value: '3', label: '3x 420g | 30% Rabatt | 53,-€ pro Packung'},
  {value: '2', label: '2x 420g | 20% Rabatt | 61,-€ pro Packung'},
  {value: '1', label: '1x 420g | 76,- € pro Packung'},
];

/**
 * Custom add-to-cart form for Crystal Cacao products.
 * No Shopify variants — the dropdown controls the quantity
 * of the single product variant added to the cart.
 *
 * @param {{ selectedVariant: object }} props
 */
export function CacaoProductForm({selectedVariant}) {
  const [quantity, setQuantity] = useState('3');
  const {open} = useAside();

  return (
    <div className="product-form">
      <div className="product-options">
        <h5>Größe</h5>
        <select
          className="CacaoVariantSelect"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
