import React from 'react';
import styles from './Icon.module.scss';
import Image from 'next/image';
import { IconProps } from './Icon.types';

export default function Icon({ image, title }: IconProps) {
  return (
    <div className={styles.container}>
      <Image src={image} width={30} height={30} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
