import { FC } from 'react';
import { Text } from '../../text/text';
import { Title } from '../../title/title';
import { IReviewDescriptionProps } from './review-description.props';
import styles from './review-description.module.css';

export const ReviewDescription: FC<IReviewDescriptionProps> = ({ title, description }) => {
  return(
    <div className={styles.container}>
      <Title level={4} extraClass={styles.title}>{title}</Title>
      <Text>{description}</Text>
    </div>
  );
};
