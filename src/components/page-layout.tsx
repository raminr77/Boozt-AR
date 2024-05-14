import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className='w-full flex justify-center items-start'>{children}</div>;
}
