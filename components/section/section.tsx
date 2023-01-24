import { FC } from 'react';
import { ISectionProps } from './section.props';
import styles from './section.module.css';

export const Section: FC<ISectionProps> = ({ extraClass, id, children }) => {
  const sectionClass = extraClass ? `${styles.container} ${extraClass}` : styles.container;

  return(
    <section className={sectionClass} id={id}>
      {children}
    </section>
  );
}
