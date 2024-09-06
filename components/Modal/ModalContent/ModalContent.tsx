import React from 'react';
import styles from './ModalContent.module.scss';
import contentData from './content.json';

export default function ModalContent() {
  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        {contentData.map((item, idx) => (
          <li key={idx} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
