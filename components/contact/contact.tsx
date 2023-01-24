import { FC } from 'react';
import { Section } from '../section/section';
import { Title } from '../title/title';
import { Text } from '../text/text';
import { ContactForm } from './form/contact-form';
import styles from './contact.module.css';

export const Contact: FC = () => {
  return(
    <Section id='contact' extraClass={styles.container}>
      <div className={styles.decor}>
        <Title level={2} extraClass={styles.title}>Contact us</Title>
        <Text extraClass={styles.text}>Do you have any kind of help please contact with us.</Text>
        <ContactForm />
      </div>
    </Section>
  );
};
