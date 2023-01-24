import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  extraClass?: string;
}