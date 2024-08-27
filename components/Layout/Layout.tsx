import React, { useEffect, useState } from 'react';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import useKeyPress from '@/hooks/useKeyPress';
import usePageNavigation from '@/hooks/usePageNavigation';
import { debounce } from '@/utils/debounce';

export default function Layout({ children, url }: LayoutProps) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const { goToNextPage, goToPreviousPage } = usePageNavigation();

  useKeyPress('ArrowRight', goToNextPage);
  useKeyPress('ArrowLeft', goToPreviousPage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = debounce(() => {
        setWindowWidth(window.innerWidth);
      }, 200);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.window_container}>
        <Header url={url} />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
