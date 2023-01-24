import { FC } from 'react';
import { Text } from '../../text/text';
import styles from './question-description.module.css';

export const QuestionDescription: FC = () => {
  return(
    <div className={styles.description}>
      <Text>Do you have any kind of questions?</Text>
      <Text>We are here to help.</Text>
    </div>
  );
};
