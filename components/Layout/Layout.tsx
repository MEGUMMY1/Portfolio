import React from 'react';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';
import Header from './Header/Header';

export default function Layout({ children, url }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.window_container}>
        <Header url={url} />
        {children}
      </div>
    </div>
  );
}
