export function ProductCard({
  title,
  image,
  model_URL,
  description,
  IOS_Model_URL
}: Product) {
  return (
    <div className='bg-white flex flex-col shadow-lg rounded-md border border-solid border-slate-200 overflow-hidden'>
      <div className='w-full bg-slate-100 flex items-center justify-center h-96'>
        <model-viewer
          ar={true}
          alt={title}
          enable-pan=''
          poster={image}
          src={model_URL}
          camera-controls=''
          touch-action='pan-y'
          shadow-intensity='1'
          ios-src={IOS_Model_URL}
          ar-status='not-presenting'
          ar-modes='scene-viewer webxr quick-look'
        ></model-viewer>
      </div>
      <a
        href={`intent://${model_URL}?link=/&title=${title}#Intent;scheme=http;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=/;end;`}
      >
        click
      </a>

      <div className='flex flex-col px-5 pb-5 pt-3 gap-2'>
        <h3 className='font-medium'>{title}</h3>
        <p className='text-gray-500 text-sm leading-6'>{description}</p>
      </div>
    </div>
  );
}
