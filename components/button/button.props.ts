import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: 'button' | 'submit';
  extraClass?: string;
  disable?: boolean;
}