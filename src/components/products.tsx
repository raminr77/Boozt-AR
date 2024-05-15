import { PRODUCTS_DATA } from '../data/products.ts';
import { ProductCard } from './product-card.tsx';

export function Products() {
  return (
    <section className='w-11/12 max-w-screen-sm flex flex-col items-center gap-4'>
      <p className='mb-4'>
        Experience products from every angle in immersive 3D! For mobile users, a
        convenient button located at the bottom right of each photo allows you to
        seamlessly view the product in augmented reality.
        <br />
        <br />
        Just tap to step into a whole new dimension of shopping.
      </p>
      <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2'>
        {PRODUCTS_DATA.map(({ id, ...productItem }) => (
          <ProductCard key={id} {...productItem} />
        ))}
      </div>
    </section>
  );
}
