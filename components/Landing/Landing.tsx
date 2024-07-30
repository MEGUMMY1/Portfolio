import React from 'react';
import styles from './Landing.module.scss';
import MenuButton from './MenuButton/MenuButton';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <MenuButton
          image="/image/AboutMe.svg"
          title="About me"
          href="/about-me"
        />
        <MenuButton
          image="/image/Education.svg"
          title="Education"
          href="/education"
        />
        <MenuButton
          image="/image/Certificate.svg"
          title="Certifications"
          href="/certifications"
        />
        <MenuButton
          image="/image/SkillnTools.svg"
          title="Skills&Tools"
          href="/skills-tools"
        />
        <MenuButton
          image="/image/Activities.svg"
          title="Activities"
          href="/activities"
        />
        <MenuButton
          image="/image/Projects.svg"
          title="Projects"
          href="/projects"
        />
      </div>
    </div>
  );
}
