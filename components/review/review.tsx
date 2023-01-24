import { FC, useState } from 'react';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Gallery } from './gallery/gallery';
import { ReviewDescription } from './review-description/review-description';
import { useAppSelector } from '../../services/hooks';
import { content } from './const';
import styles from './review.module.css';

export const Review: FC = () => {
  const reviewOrder = useAppSelector((state) => state.review.order);

  return(
    <Section id='review' extraClass={styles.container}>
      <Title level={2} extraClass={styles.title}>Review</Title>
      <ReviewDescription
        title={content[reviewOrder[0]].title}
        description={content[reviewOrder[0]].text}
      />
      <Gallery
        contentList={content}
      />
    </Section>
  );
};
