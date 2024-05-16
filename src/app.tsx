import { useState } from 'react';
import { Home } from './components/home.tsx';
import { Header } from './components/header.tsx';
import { Footer } from './components/footer.tsx';
import { Markers } from './components/markers.tsx';
import { Products } from './components/products.tsx';
import { PageLayout } from './components/page-layout.tsx';
import { CustomRender } from './components/custom-render.tsx';

const MENU = {
  HOME: 'Home',
  MARKERS: 'Markers',
  PRODUCTS: 'Products'
};

const mainClasses =
  'h-full min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4 select-none py-5';

function App() {
  const [activeTab, setActiveTab] = useState<string>(MENU.HOME);

  const params = new URLSearchParams(location.search || '');
  const customRender = params.get('show');

  if (customRender) {
    return (
      <main className={mainClasses}>
        <CustomRender />
        <Footer />
      </main>
    );
  }

  return (
    <main className={mainClasses}>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        items={Object.values(MENU)}
      />

      <PageLayout>
        {activeTab === MENU.HOME && <Home />}
        {activeTab === MENU.MARKERS && <Markers />}
        {activeTab === MENU.PRODUCTS && <Products />}
      </PageLayout>

      <Footer />
    </main>
  );
}

export default App;
