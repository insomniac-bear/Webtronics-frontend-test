import { FC } from 'react';
import { IMenuItem } from './menu-item.props';
import Link from 'next/link';
import styles from './menu-item.module.css';

export const MenuItem: FC<IMenuItem> = ({ link, name }) => {
  return(
    <li className={styles.item}>
      <Link className={styles.link} href={link} scroll={true}>{name}</Link>
    </li>
  );
}