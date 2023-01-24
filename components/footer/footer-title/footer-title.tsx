import { FC } from 'react';
import { IFooterTitleProps } from './footer-title.props';
import styles from './footer-title.module.css';

export const FooterTitle: FC<IFooterTitleProps> = ({ children, extraClass }) => {
  const titleClass = extraClass ? `${extraClass} ${styles.title}` : styles.title;
      return <h3 className={titleClass}>{children}</h3>;
};
