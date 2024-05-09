import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0
  });

  const getCurrentLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLocation({
          lat: coords.latitude,
          lng: coords.longitude
        });
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <main className='h-screen bg-slate-50 flex flex-col items-center justify-center gap-4'>
      {loading ? <h3>Loading ...</h3> : <h3>{`${location.lat} - ${location.lng}`}</h3>}
      <button
        disabled={loading}
        onClick={getCurrentLocation}
        className='bg-slate-700 rounded text-slate-50 py-2 px-5 duration-300 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-20'
      >
        Get Current Location
      </button>
    </main>
  );
}

export default App;
