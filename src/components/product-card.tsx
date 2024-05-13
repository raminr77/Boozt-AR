export function ProductCard({ title, description }: Product) {
  return (
    <div className='bg-white flex flex-col shadow-lg rounded-md border border-solid border-slate-200 overflow-hidden'>
      <div className='w-full bg-slate-100 flex items-center justify-center h-96'>
        <model-viewer
          alt=''
          camera-controls=''
          shadow-intensity='1'
          touch-action='pan-y'
          ar-status='not-presenting'
          src='https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb'
          poster='https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp'
          environment-image='https://modelviewer.dev/shared-assets/environments/moon_1k.hdr'
        >
          <button slot='ar-button'>AR</button>
        </model-viewer>
      </div>

      <div className='flex flex-col px-5 pb-5 pt-3 gap-2'>
        <h3 className='font-medium'>{title}</h3>
        <p className='text-gray-500 text-sm leading-6'>{description}</p>
      </div>
    </div>
  );
}
