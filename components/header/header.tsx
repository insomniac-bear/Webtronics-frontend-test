import { FC } from 'react';
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';
import styles from './header.module.css';

export const Header: FC = () => {
  return(
    <header className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
