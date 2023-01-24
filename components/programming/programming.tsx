import { FC } from 'react';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Text } from '../text/text';
import { ProgrammingItems } from './programming-items/programming-items';
import styles from './programming.module.css';

export const Programming: FC = () => {
  return(
    <Section id='programs' extraClass={styles.container}>
      <Title level={2} extraClass={styles.title}>Programming technologies</Title>
      <Text extraClass={styles.description}> By the end, you’ll have the portfolio and interview skills you need to start your new career.</Text>
      <ProgrammingItems />
    </Section>
  );
};
