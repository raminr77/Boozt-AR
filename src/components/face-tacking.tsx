const URL = 'https://raminrezaei.ir/face-landmark-detection/';

export function FaceTacking() {
  return (
    <section className='w-11/12 max-w-screen-sm overflow-hidden flex flex-col gap-4 items-center'>
      <div className='w-full h-96 bg-slate-300 rounded overflow-hidden relative'>
        {/* Face Tracking */}
        <iframe src={URL} width='100%' height='100%' allow='camera; microphone'></iframe>
        {/* Face Tracking */}
      </div>
    </section>
  );
}
