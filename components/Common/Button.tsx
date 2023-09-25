import {ReactNode} from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: Function;
  className?: string;
}

export default function Button({children, onClick, className}: ButtonProps) {
  return <button className={`rounded-full py-2 px-5 bg-brand-primary text-white ${className} hover:bg-brand-primary-500`} onClick={() => onClick?onClick():''}>
    {children}
  </button>;
}