const MARKERS = [
  { id: 1, title: 'Boozt Marker', path: '/markers/boozt-marker.png' },
  { id: 2, title: 'QR Code Marker', path: '/markers/qr-marker.png' },
  { id: 3, title: 'Default AR Marker', path: '/markers/hiro-marker.png' }
];
export function Markers() {
  const btnClasses =
    'bg-slate-100 hover:bg-slate-200 px-4 py-1 rounded-md flex items-center justify-center border-2 border-slate-300 text-slate-500 hover:text-slate-900';

  return (
    <section className='w-11/12 max-w-screen-sm overflow-hidden flex flex-col gap-4 items-center'>
      <div className='w-full h-96 bg-slate-300 rounded overflow-hidden'>
        {/* A Frame */}
        <a-scene embedded={true} arjs='sourceType: webcam;'>
          <a-marker preset='hiro'>
            <a-box position='0 0.5 0' material='color: yellow; opacity: 0.8'></a-box>
          </a-marker>

          <a-entity
            camera='active: true'
            look-controls={true}
            position='0 0.5 0'
          ></a-entity>
        </a-scene>
        {/* A Frame */}
      </div>
      <p>Please hold one of the markers in front of the camera.</p>
      <div className='flex flex-col gap-2'>
        {MARKERS.map(({ id, title, path }) => (
          <a key={id} href={path} download={title} target='_blank' className={btnClasses}>
            {`Download ${title}`}
          </a>
        ))}
      </div>
    </section>
  );
}
