import { FC, useState } from 'react';
import { Section } from '../section/section';
import { QuestionDescription } from './question-description/question-description';
import { Title } from '../title/title';
import { questions } from './const';
import styles from './questions.module.css';
import { Question } from './question/question';

export const Questions: FC = () => {
  const [activeId, setActiveId] =useState(0);

  const toggleActiveQuestion = (id: number) => {
    setActiveId(id);
  };

  return(
    <Section id="questions" extraClass={styles.container}>
      <Title level={2} extraClass={styles.title}>Frequently Asked Questions</Title>
      <QuestionDescription />
      <ul className={styles.list}>
        {
          questions.map((item) => <li key={item.id} className={styles.item}>
            <Question
              isActive={item.id === activeId}
              question={item.question}
              answer={item.answer}
              toggleQuestion={() => toggleActiveQuestion(item.id)}
            />
          </li>)
        }
      </ul>
    </Section>
  );
};
