import { FC } from 'react';
import { ITextProps } from './text.props';
import styles from './text.module.css';

export const Text: FC<ITextProps> = ({ children, extraClass }) => {
  const textClass = extraClass ? `${extraClass} ${styles.text}` : styles.text;
  return(
    <p className={textClass}>
      {children}
    </p>
  );
};
