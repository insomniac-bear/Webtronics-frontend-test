import { FC } from 'react';
import { ITitleProps } from './title.props';
import styles from './title.module.css';

export const Title: FC<ITitleProps> = ({ level, children, extraClass }) => {
  const titleClass = extraClass ? `${extraClass} ${styles.title}` : styles.title;
  switch(level) {
    case 1:
      return <h1 className={titleClass}>{children}</h1>;
    case 2:
      return <h2 className={titleClass}>{children}</h2>;
    case 3:
      return <h3 className={titleClass}>{children}</h3>;
    case 4:
      return <h4 className={titleClass}>{children}</h4>;
    default:
      return <h2 className={titleClass}>{children}</h2>
  };
};
