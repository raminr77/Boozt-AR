import { useState } from 'react';

const MARKERS = [
  { id: 0, title: 'All Markers', path: '/markers/all-markers.png' },
  { id: 1, title: 'Hiro Marker', path: '/markers/hiro-marker.png' },
  { id: 2, title: 'Lambda Marker', path: '/markers/lambda-marker.png' }
];

const OPTIONS = [
  {
    id: 1,
    title: 'Basic - Hiro Marker',
    url: 'https://stemkoski.github.io/AR-Examples/hello-cube.html'
  },
  {
    id: 2,
    title: 'Animation - Hiro Marker',
    url: 'https://stemkoski.github.io/AR-Examples/globe.html'
  },
  {
    id: 3,
    title: 'Many Cubes - All Markers',
    url: 'https://stemkoski.github.io/AR-Examples/custom-patterns.html'
  },

  {
    id: 4,
    title: 'Physics - Lambda Marker',
    url: 'https://stemkoski.github.io/AR-Examples/shadow-balls.html'
  }
];

export function Markers() {
  const [activeOptionURL, setActiveOptionURL] = useState<string>(OPTIONS[0].url);

  const btnClasses =
    'bg-slate-100 outline-0 hover:bg-slate-200 px-4 py-1 rounded-md flex items-center justify-center border-2 border-slate-300 text-slate-500 hover:text-slate-900';

  return (
    <section className='w-11/12 max-w-screen-sm overflow-hidden flex flex-col gap-4 items-center'>
      <select
        onChange={({ target }) => setActiveOptionURL(target.value)}
        className={btnClasses}
      >
        {OPTIONS.map(({ id, title, url }) => (
          <option key={id} value={url} selected={activeOptionURL === url}>
            {title}
          </option>
        ))}
      </select>

      <div className='w-full h-96 bg-slate-300 rounded overflow-hidden relative'>
        <h3 className='absolute w-full flex items-center justify-center h-full text-lg z-0'>
          Loading ...
        </h3>
        {/* A Frame */}
        <iframe
          width='100%'
          height='100%'
          src={activeOptionURL}
          allow='camera; microphone'
          className='w-full h-full absolute top-0 left-0 right-0 z-10'
        ></iframe>
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
