import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
  level: 1 | 2 | 3 | 4;
  extraClass?: string;
}
