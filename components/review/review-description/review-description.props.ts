import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IReviewDescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
}