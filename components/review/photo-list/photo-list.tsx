import { FC } from 'react';
import { IPhotoList } from './photo-list.props';
import { useAppSelector } from '../../../services/hooks';
import styles from './photo-list.module.css';

export const PhotoList: FC<IPhotoList> = ({ contentList }) => {
  const order = useAppSelector((state) => state.review.order);

  return(
    <ul className={styles.list}>
      {
        order.map((photoIndex) => {
          return(
            <li className={styles.item} key={contentList[photoIndex].id}>
              <div className={styles.decor}></div>
              <div className={styles.img} style={{ backgroundImage: `url(${contentList[photoIndex].img})` }}></div>
            </li>
          );
        })
      }
  </ul>
  );
};
