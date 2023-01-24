import Link from 'next/link';
import { FC } from 'react';
import { FbIcon, GitLabIcon, LinkedIcon, TwitterIcon } from '../../icons';
import styles from './footer-social.module.css';

export const FooterSocial: FC = () => {
  return(
    <ul className={styles.list}>
      <li>
        <Link href='#' aria-label='FaceBook link'>
          <FbIcon />
        </Link>
      </li>
      <li>
        <Link href='#' aria-label='GitLab link'>
          <GitLabIcon />
        </Link>
      </li>
      <li>
        <Link href='#' aria-label='Twitter link'>
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link href='#' aria-label='LinkedIn link'>
          <LinkedIcon />
        </Link>
      </li>
    </ul>
  );
};
