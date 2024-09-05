import React, { useState, useEffect } from 'react';
import styles from './ModalContent.module.scss';
import contentData from './content.json';
import { Tab } from './ModalContent.types';

export default function ModalContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(contentData.tabs);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tab_content}>
        {tabs[activeTab] && (
          <ul className={styles.line}>
            {tabs[activeTab].content.map((item, idx) => (
              <li key={idx} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
