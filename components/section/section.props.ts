import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  extraClass?: string;
  id?: string;
}