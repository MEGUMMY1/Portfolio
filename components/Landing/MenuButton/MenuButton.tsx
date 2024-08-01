import React from 'react';
import styles from './MenuButton.module.scss';
import { MenuButtonProps } from './MenuButton.types';
import Link from 'next/link';

export default function MenuButton({ color, title, href }: MenuButtonProps) {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.button}>
          <div className={styles.index} style={{ backgroundColor: color }} />
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </Link>
  );
}
