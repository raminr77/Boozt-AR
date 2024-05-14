import { useState } from 'react';
import { Home } from './components/home.tsx';
import { Header } from './components/header.tsx';
import { Footer } from './components/footer.tsx';
import { Markers } from './components/markers.tsx';
import { Products } from './components/products.tsx';
import { PageLayout } from './components/page-layout.tsx';
import { FaceTacking } from './components/face-tacking.tsx';

const MENU = {
  HOME: 'Home',
  MARKERS: 'Markers',
  PRODUCTS: 'Products',
  FACE_TRACKING: 'Face Tracking'
};

function App() {
  const [activeTab, setActiveTab] = useState<string>(MENU.HOME);

  return (
    <main className='h-full min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4 select-none py-5'>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        items={Object.values(MENU)}
      />

      <PageLayout>
        {activeTab === MENU.HOME && <Home />}
        {activeTab === MENU.MARKERS && <Markers />}
        {activeTab === MENU.PRODUCTS && <Products />}
        {activeTab === MENU.FACE_TRACKING && <FaceTacking />}
      </PageLayout>

      <Footer />
    </main>
  );
}

export default App;
