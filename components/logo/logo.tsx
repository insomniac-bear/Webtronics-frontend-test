import Image from "next/image";
import { FC } from "react";
import styles from './logo.module.css';

export const Logo: FC = () => {
  return(
    <div className={styles.container}>
      <Image
        src={'/images/logo.png'}
        alt="Webtronic"
        fill={true}
      />
    </div>
  );
};