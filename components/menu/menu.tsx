import Link from 'next/link';
import type { FC } from 'react';
import { menuItems } from './constants';
import { MenuItem } from './menu-item/menu-item';
import styles from './menu.module.css';

export const Menu: FC = () => {
  return(
    <ul className={styles.container}>
      {
        menuItems.map(menuItem => {
          return(
            <MenuItem
              key={menuItem.id}
              name={menuItem.name}
              link={menuItem.link}
            />
          );
        })
      }
    </ul>
  );
}