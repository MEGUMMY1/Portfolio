import { useEffect } from 'react';

export default function useKeyPress(key: string, action: () => void) {
  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        action();
      }
    };

    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [key, action]);
}
