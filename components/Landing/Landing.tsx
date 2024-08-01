import React from 'react';
import styles from './Landing.module.scss';
import MenuButton from './MenuButton/MenuButton';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <MenuButton color="#b6a999" title="About me" href="/about-me" />
        <MenuButton color="#7d7986" title="Education" href="/education" />
        <MenuButton
          color="#067c61"
          title="Certifications"
          href="/certifications"
        />
        <MenuButton color="#232323" title="Skills&Tools" href="/skills-tools" />
        <MenuButton color="#0081a7" title="Activities" href="/activities" />
        <MenuButton color="#eb7262" title="Projects" href="/projects" />
      </div>
    </div>
  );
}
