import { FC } from 'react';
import Image from 'next/image';
import { Title } from '../../title/title';
import { skills } from './const';
import styles from './programming-items.module.css';

export const ProgrammingItems: FC = () => {
  return(
    <ul className={styles.list}>
      {
        skills.map((skill) => <li key={skill.id} className={styles.item}>
          <Image
            className={styles.icon}
            src={skill.icon}
            width={162}
            height={136}
            alt={skill.name}
          />
          <Title level={4} extraClass={styles.title}>{skill.name}</Title>
        </li>)
      }
    </ul>
  );
};
