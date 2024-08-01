import React from 'react';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import useKeyPress from '@/hooks/useKeyPress';
import usePageNavigation from '@/hooks/usePageNavigation';

export default function Layout({ children, url }: LayoutProps) {
  const { goToNextPage, goToPreviousPage } = usePageNavigation();

  useKeyPress('ArrowRight', goToNextPage);
  useKeyPress('ArrowLeft', goToPreviousPage);

  const handleClick = (event: React.MouseEvent) => {
    const container = document.querySelector(`.${styles.window_container}`);
    if (container && !container.contains(event.target as Node)) {
      if (event.clientX > window.innerWidth / 2) {
        goToNextPage();
      } else {
        goToPreviousPage();
      }
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.window_container}>
        <Header url={url} />
        {children}
      </div>
    </div>
  );
}
