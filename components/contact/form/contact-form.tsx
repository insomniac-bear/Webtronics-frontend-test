import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../button/button';
import { Text } from '../../text/text';
import { useAppDispatch, useAppSelector } from '../../../services/hooks';
import { sendForm } from '../../../services/slices/contact';
import { formSchema } from './util';
import styles from './contact-form.module.css';

type TForm = InferType<typeof formSchema>;

export const ContactForm: FC = () => {
  const dispatch = useAppDispatch();
  const formStatus = useAppSelector((state) => state.contact.status);
  const { register, handleSubmit, reset, formState: { errors }} = useForm<TForm>({
    resolver: yupResolver(formSchema)
  });

  const onSubmit: SubmitHandler<TForm> = (data) => {
    console.log(data);
    dispatch(sendForm(data));
    reset();
  };

  return(
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          className={styles.input}
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        <Text extraClass={styles.error}>{errors.name?.message}</Text>
      </label>
      <label>
      <input
        className={styles.input}
        type='text'
        placeholder='Phone'
        {...register('phone')}
      />
        <Text extraClass={styles.error}>{errors.phone?.message}</Text>
      </label>
      <label>
      <input
        className={styles.input}
        type='mail'
        placeholder='E-mail'
        {...register('email')}
      />
        <Text extraClass={styles.error}>{errors.email?.message}</Text>
      </label>
      <Button type='submit' disable={formStatus === 'loading'}>Send</Button>
    </form>
  );
};
