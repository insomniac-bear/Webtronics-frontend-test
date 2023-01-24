import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../button/button';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Text } from '../text/text';
import styles from './intro.module.css';

export const Intro: FC = () => {
  const router = useRouter();
  return(
    <Section extraClass={styles.section}>
      <div className={styles.content}>
        <Text extraClass={styles.note}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).</Text>
        <Title level={1} extraClass={styles.title}>
          Front-End
          <span className={styles.secondTitle}>Developer</span>
          <span className={styles.subTitle}>Courses</span>
        </Title>
        <Button
          extraClass={styles.button}
          onClick={() => router.push('#contact')}
        >
          Start my career change
        </Button>
      </div>
    </Section>
  );
};
