import { ReactNode } from 'react';

const getButtonClasses = (color: string) => `
  text-${color} border-${color} border-2 rounded-md px-2 py-1 bg-white
  hover:bg-${color} hover:text-white hover:shadow-md
`;

interface RemapButtonProps {
  color: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const RemapButton = ({ color, onClick, children }: RemapButtonProps) => {
  return (
    <button onClick={onClick || (() => {})} className={getButtonClasses(color)}>
      {children}
    </button>
  );
};

export default RemapButton;