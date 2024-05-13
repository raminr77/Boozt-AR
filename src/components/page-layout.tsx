import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className='min-h-96 flex justify-center'>{children}</div>;
}
