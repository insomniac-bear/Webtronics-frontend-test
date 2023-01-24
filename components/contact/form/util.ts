import { object, string } from 'yup';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const formSchema = object({
  name: string().required('Name is required').min(3, 'must be at least 3 characters long'),
  phone: string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
  email: string().required('E-mail is required').email('Email is invalid'),
});
