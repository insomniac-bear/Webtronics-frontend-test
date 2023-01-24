import { FC } from 'react';
import { GalleryHeader } from '../gallery-header/gallery-header';
import { PhotoList } from '../photo-list/photo-list';
import styles from './gallery.module.css';
import { IPhotoList } from '../photo-list/photo-list.props';

export const Gallery: FC<IPhotoList> = ({ contentList }) => {
  return(
    <div className={styles.container}>
      <GalleryHeader />
      <PhotoList
        contentList={contentList}
      />
    </div>
  );
};
