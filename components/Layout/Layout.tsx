import React from 'react';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';
import Header from './Header/Header';

export default function Layout({ children, url }: LayoutProps) {
  return (
    <div className={styles.container}>
      <p className={styles.bg_text}>CHO</p>
      <div className={styles.window_container}>
        <Header url={url} />
        {children}
      </div>
      <p className={styles.bg_text}>HYEJEAN</p>
    </div>
  );
}
