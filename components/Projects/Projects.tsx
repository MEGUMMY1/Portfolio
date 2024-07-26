import React from 'react';
import styles from './Projects.module.scss';
import projects from './Projects.json';
import Card from './Card/Card';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.card_container}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
            figma={project.figma}
          />
        ))}
      </div>
    </div>
  );
}
