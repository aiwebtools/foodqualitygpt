
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'blue',
  size = 'md',
  href,
  external = false,
  ...props
}) => {
  const buttonClasses = cn(
    variant === 'blue' && 'cyber-button',
    variant === 'green' && 'cyber-button-green',
    variant === 'purple' && 'cyber-button-purple',
    size === 'sm' && 'text-xs py-1 px-3',
    size === 'md' && 'text-sm py-2 px-6',
    size === 'lg' && 'text-base py-3 px-8',
    'rounded-md',
    className
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
