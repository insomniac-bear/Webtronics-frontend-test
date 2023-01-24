import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../services/hooks';
import { setLeftStep, setRightStep } from '../../../services/slices/review';
import styles from './gallery-header.module.css';

export const GalleryHeader: FC = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.review.order);

  const onLeftButtonClick = () => {
    dispatch(setLeftStep());
  }

  const onRightButtonClick = () => {
    dispatch(setRightStep());
  }

  return(
    <header className={styles.header}>
      <p className={styles.pagination}>{order[0] + 1}/ <sup>3</sup></p>
      <ul className={styles.controls}>
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={onLeftButtonClick}
            aria-label='left'
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19.5L1.5 10L11 0.5" stroke="white"/>
            </svg>
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={onRightButtonClick}
            aria-label='right'
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.5L10.5 10L1 0.5" stroke="white"/>
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
};
