import { FC } from 'react';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Text } from '../text/text';
import { Mentors } from './mentors/mentors';
import styles from './about.module.css';

export const About: FC = () => {
  return(
    <Section id='about'>
      <Title level={2} extraClass={styles.title}>About Us</Title>
      <div className={styles.container}>
        <Mentors />
        <Text extraClass={styles.text}>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</Text>
      </div>
    </Section>
  );
};
