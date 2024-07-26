import React from 'react';
import styles from './SkillsTools.module.scss';
import { skillsState } from '@/states/skillsState';
import { useRecoilValue } from 'recoil';
import Container from './Container/Container';

export default function SkillsTools() {
  const skills = useRecoilValue(skillsState);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills&Tools</h1>
      <div className={styles.map}>
        {skills.map((item, index) => (
          <Container key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
