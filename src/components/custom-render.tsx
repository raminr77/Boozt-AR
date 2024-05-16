import { ProductCard } from './product-card.tsx';
import { PRODUCTS_DATA } from '../data/products.ts';

export function CustomRender() {
  return (
    <section className='w-11/12 max-w-screen-sm flex flex-col items-center gap-2'>
      <h3 className='w-full font-medium text-2xl text-center'>
        WebAR, the future of the AR
      </h3>
      <p className='text-gray-400 border-b border-slate-300 pb-4 w-full text-center'>
        Platform Conference 2024
      </p>
      <div className='flex items-center justify-between w-full px-5 mb-7'>
        <p className='text-slate-600'>Track 3</p>
        <p className='text-slate-600'>14:25 - 14:55</p>
      </div>

      <div className='w-full'>
        <ProductCard
          {...PRODUCTS_DATA[0]}
          isLarge
          title='AR Product Example'
          description='Experience products from every angle in immersive 3D! For mobile users, a convenient button located at the bottom right of each photo allows you to seamlessly view the product in augmented reality.'
        />
      </div>
    </section>
  );
}
