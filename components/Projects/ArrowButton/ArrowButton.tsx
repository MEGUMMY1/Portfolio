import React from 'react';
import Image from 'next/image';
import styles from './ArrowButton.module.scss';

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrow_next} onClick={onClick}>
      <Image src="/icon/next_arrow.svg" alt="Next" width={50} height={50} />
    </div>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrow_prev} onClick={onClick}>
      <Image src="/icon/prev_arrow.svg" alt="Prev" width={50} height={50} />
    </div>
  );
}
