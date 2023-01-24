import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFooterTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
  extraClass?: string;
};
