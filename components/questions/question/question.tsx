import { FC } from 'react';
import { Title } from '../../title/title';
import { Text } from '../../text/text';
import { IQuestionProps } from './question.props';
import styles from './question.module.css';

export const Question: FC<IQuestionProps> = ({ isActive, question, answer, toggleQuestion }) => {
  const answerClass = isActive ? `${styles.answer} ${styles.activeAnswer}` : styles.answer;
  const containerClass = isActive ? `${styles.container} ${styles.activeContainer}` : styles.container;

  return(
    <div className={containerClass}>
      <header className={styles.header}>
        <Title level={4} extraClass={styles.question}>{question}</Title>
        <button
          className={styles.toggler}
          type='button'
          onClick={toggleQuestion}
          aria-label='Open answer'
        ></button>
      </header>
      <Text extraClass={answerClass}>{answer}</Text>
    </div>
  );
};
