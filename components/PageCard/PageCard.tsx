import React from 'react';

function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <div className={'relative w-full p-5 text-white shadow-lg'}>
      <div className="flex flex-col gap-10 rounded-lg bg-gray-900 p-5">
        {children}
      </div>
    </div>
  );
}

export default PageCard;
