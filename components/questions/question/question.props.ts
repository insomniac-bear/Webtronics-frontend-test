import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IQuestionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive: boolean;
  question: string;
  answer: string;
  toggleQuestion: () => void;
}