import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IStepProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  index: number;
  title: string;
  description: string;
}
