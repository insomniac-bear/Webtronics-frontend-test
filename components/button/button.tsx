import { FC } from 'react';
import { IButtonProps } from './button.props';
import styles from './button.module.css';

export const Button:FC<IButtonProps> = ({ children, extraClass, disable = false, type = 'button', onClick }) => {
  const buttonStyle = extraClass ? `${extraClass} ${styles.button}` : styles.button;

  return(
    <button
      className={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};
