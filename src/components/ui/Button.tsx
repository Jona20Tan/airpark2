import { Link, LinkProps } from 'react-router-dom';
import { ComponentProps, ReactNode } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & Omit<ComponentProps<'button'>, keyof ButtonBaseProps> & {
  as?: 'button';
};

type ButtonAsLinkProps = ButtonBaseProps & Omit<LinkProps, keyof ButtonBaseProps> & {
  as: typeof Link;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({ variant = 'primary', children, className = '', as: Component = 'button', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full font-bold transition-colors';
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (Component === Link) {
    return (
      <Link 
        className={combinedClassName}
        {...(props as LinkProps)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...(props as ComponentProps<'button'>)}
    >
      {children}
    </button>
  );
}