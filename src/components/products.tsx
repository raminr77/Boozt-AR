import { PRODUCTS_DATA } from '../data/products.ts';
import { ProductCard } from './product-card.tsx';

export function Products() {
  return (
    <section className='w-11/12 max-w-screen-sm grid gap-4 grid-cols-1'>
      {PRODUCTS_DATA.map(({ id, ...productItem }) => (
        <ProductCard key={id} {...productItem} />
      ))}
    </section>
  );
}
