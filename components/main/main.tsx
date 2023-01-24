import { FC } from 'react';
import { IMainProps } from './main.props';
import styles from './main.module.css';

export const Main: FC<IMainProps> = ({ children }) => {
  return(
    <main className={styles.container}>
      {children}
    </main>
  );
}
