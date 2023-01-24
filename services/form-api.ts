export type TFormData = {
  name: string,
  phone: string,
  email: string,
};

export const formApi = (data: TFormData) => fetch('http://localhost:3004/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})