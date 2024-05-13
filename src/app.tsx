import { ProductCard } from './components/product-card.tsx';
import { PRODUCTS_DATA } from './data/products.ts';

function App() {
  return (
    <main className='h-full bg-slate-50 flex flex-col items-center justify-center gap-4 select-none py-5'>
      <div className='flex flex-col gap-1 items-center justify-center my-5'>
        <h3 className='font-bold text-3xl text-gray-900'>Boozt AR</h3>
        <p className='text-gray-400'>Augmented Reality - Platform Conference 2024</p>
      </div>

      <section className='flex flex-wrap gap-6 w-11/12 max-w-screen-md'>
        {PRODUCTS_DATA.map(({ id, ...productItem }) => (
          <ProductCard key={id} {...productItem} />
        ))}
      </section>

      <p className='mt-8 mb-3 text-gray-300'>Created By Ramin</p>
    </main>
  );
}

export default App;
