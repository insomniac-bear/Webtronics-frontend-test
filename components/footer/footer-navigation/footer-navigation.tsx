import Link from 'next/link';
import { FC } from 'react';
import { FooterTitle } from '../footer-title/footer-title';
import styles from './footer-navigation.module.css';

export const FooterNavigation: FC = () => {
  return(
    <nav className={styles.container}>
      <FooterTitle>Company</FooterTitle>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="#about">About us</Link>
        </li>
        <li>
          <Link className={styles.link} href="#review">Review</Link>
        </li>
        <li>
          <Link className={styles.link} href="#steps">Steps</Link>
        </li>
        <li>
          <Link className={styles.link} href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link className={styles.link} href="#questions">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
};
