import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IContent } from '../const';

export interface IPhotoList extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>,HTMLUListElement> {
  contentList: IContent[];
}