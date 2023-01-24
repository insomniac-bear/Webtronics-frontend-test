import { FC } from 'react';
import Image from 'next/image';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Text } from '../text/text';
import styles from './gallery.module.css';

export const Gallery: FC = () => {
  return (
    <Section id='gallery' extraClass={styles.container}>
      <Title extraClass={styles.title} level={2}>Gallery</Title>
      <Text extraClass={styles.text_1}>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.</Text>
      <Image
        className={styles.img_1}
        src='/images/gallery-1.jpg'
        alt='developer'
        width='600'
        height='434'
      />
      <Image
        className={styles.img_2}
        src='/images/gallery-2.jpg'
        alt='developer'
        width='288'
        height='201'
      />
      <Image
        className={styles.img_3}
        src='/images/gallery-3.jpg'
        alt='developer'
        width='288'
        height='434'
      />
      <Image
        className={styles.img_4}
        src='/images/gallery-4.jpg'
        alt='developer'
        width='288'
        height='201'
      />
      <Text extraClass={styles.text_2}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</Text>
    </Section>
  );
};
