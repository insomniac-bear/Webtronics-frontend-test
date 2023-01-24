import { FC } from 'react';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { steps } from './const';
import { Step } from './step/step';
import styles from './steps.module.css';

export const Steps: FC = () => {
  return(
    <Section id='steps' extraClass={styles.container}>
      <Title level={2} extraClass={styles.title}>Steps</Title>
      <ul className={styles.list}>
        {
          steps.map((step, index) => <li key={step.id} className={styles.item}>
            <Step index={index} title={step.title} description={step.description} />
          </li>)
        }
      </ul>
    </Section>
  );
};
