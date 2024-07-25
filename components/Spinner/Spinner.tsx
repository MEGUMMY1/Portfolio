import React from 'react';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div role="status" className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}
