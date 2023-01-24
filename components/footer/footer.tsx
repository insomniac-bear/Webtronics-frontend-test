import { FC } from 'react';
import { Logo } from '../logo/logo';
import { Text } from '../text/text';
import { Title } from '../title/title';
import Link from 'next/link';
import styles from './footer.module.css';
import { FooterSocial } from './footer-social/footer-social';
import { FooterNavigation } from './footer-navigation/footer-navigation';
import { FooterTitle } from './footer-title/footer-title';

export const Footer: FC = () => {
  return(
    <footer className={styles.container}>
      <div className={styles.content}>

        <div className={styles.logoContainer}>
          <Logo />
          <Text extraClass={styles.text}>
            Wisconsin Ave, Suite 700
            Chevy Chase, Maryland 20815
          </Text>
        </div>

        <FooterNavigation />

        <div className={styles.social}>
          <FooterTitle>Social media</FooterTitle>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};
