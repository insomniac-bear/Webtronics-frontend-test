import { FC } from 'react';
import { Title } from '../../title/title';
import { mentors } from './const';
import { Mentor } from '../mentor/mentor';
import styles from './mentors.module.css';

export const Mentors: FC = () => {
  return(
    <div className={styles.container}>
      <Title level={3} extraClass={styles.title}>Mentors</Title>
      <ul className={styles.list}>
        {
          mentors.map((mentor) => <li key={mentor.id} className={styles.listItem}>
            <Mentor
              name={mentor.name}
              description={mentor.description}
              avatar={mentor.avatar}
            />
          </li>)
        }
      </ul>
    </div>
  );
};
