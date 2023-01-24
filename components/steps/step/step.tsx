import { FC } from 'react';
import { IStepProps } from './step.props';
import { Title } from '../../title/title';
import { Text } from '../../text/text';
import styles from './step.module.css';

export const Step: FC<IStepProps> = ({ title, description, index }) => {
  return(
    <div className={styles.decorationContainer}>
      <div className={styles.container}>
        <Title level={4} extraClass={styles.step}>Step {index + 1}</Title>
        <Title level={3}>{title}</Title>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
