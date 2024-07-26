import React from 'react';
import styles from './MenuButton.module.scss';
import Image from 'next/image';
import { MenuButtonProps } from './MenuButton.types';
import Link from 'next/link';

export default function MenuButton({ image, title, href }: MenuButtonProps) {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.button}>
          <div className={styles.image_container}>
            <Image
              src={image}
              alt={title}
              className={styles.image}
              width={130}
              height={130}
            />
          </div>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
