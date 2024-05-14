interface Header {
  items: string[];
  activeTab: string;
  onTabChange: (value: string) => void;
}
export function Header({ items = [], activeTab, onTabChange }: Header) {
  const btnClasses =
    'bg-slate-100 hover:bg-slate-200 px-4 py-1 rounded-md flex items-center justify-center border-2 border-slate-300 text-slate-500 hover:text-slate-900';
  return (
    <header className='flex flex-col gap-1 items-center justify-center my-5 bg-slate-50 w-full z-10 py-5'>
      <h3 className='font-bold text-3xl text-gray-900'>Boozt AR</h3>
      <p className='text-gray-400'>Augmented Reality - Platform Conference 2024</p>
      <div className='flex flex-nowrap items-center justify-center overflow-x-auto w-full mt-4 gap-x-2'>
        {items.map((value) => (
          <button
            key={value}
            onClick={() => onTabChange(value)}
            className={`${btnClasses} ${activeTab === value ? 'bg-slate-200 text-slate-900' : ''}`}
          >
            {value}
          </button>
        ))}
      </div>
    </header>
  );
}
