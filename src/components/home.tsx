export function Home() {
  return (
    <section className='flex items-center justify-center'>
      <a target='_blank' href='https://slides.com/raminr77/boozt-ar/fullscreen'>
        <div className='flex flex-col items-center justify-center gap-4 hover:scale-90 duration-300'>
          <img
            src='/images/slides-thumb.jpg'
            className='rounded-md'
            alt='AR Slides'
            width='150'
          />
          <h3>AR Slides</h3>
        </div>
      </a>
    </section>
  );
}
