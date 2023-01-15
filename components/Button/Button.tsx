import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
};
export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="rounded-lg bg-gradient-to-br from-indigo-500  to-indigo-600  p-3 text-center font-bold transition-all duration-100 ease-out hover:opacity-80"
    >
      {children}
    </button>
  );
}
