import { FC } from 'react';
import Image from 'next/image';
import { Title } from '../../title/title';
import { Text } from '../../text/text';
import { IMentorProps } from './mentor.props';
import styles from './mentor.module.css';

export const Mentor: FC<IMentorProps> = ({ name, description, avatar }) => {
  return(
    <figure className={styles.container}>
      <div className={styles.avatar}>
        <Image
          className={styles.img}
          src={avatar}
          alt={name}
          width={184}
          height={184}
        />
      </div>
      <figcaption className={styles.description}>
        <Title level={4} extraClass={styles.title}>{name}</Title>
        <Text>{description}</Text>
      </figcaption>
    </figure>
  );
};
