import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';
import projects from './Projects.json';
import details from './Details.json';
import Card from './Card/Card';
import ProjectDetail from './ProjectDetail/ProjectDetail';
import { Project, ProjectDetail as ProjectDetailType } from './Projects.types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailType | null>(
    null
  );

  useEffect(() => {
    if (selectedProject && selectedProject.id) {
      const fetchProjectDetails = (id: number): ProjectDetailType | null => {
        const projectDetail = details.find(
          (detail: ProjectDetailType) => detail.id === id
        );
        return projectDetail || null;
      };

      const projectDetails = fetchProjectDetails(selectedProject.id);

      if (projectDetails) {
        setProjectDetail(projectDetails);
      }
    }
  }, [selectedProject]);

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setProjectDetail(null);
  };

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
            onClick={() => openProjectDetail(project)}
          />
        ))}
      </div>
      {projectDetail && (
        <div className={styles.project_detail_container}>
          <Image
            src="/icon/close.svg"
            width={30}
            height={30}
            alt="close button"
            tabIndex={0}
            className={styles.close_button}
            onClick={closeProjectDetail}
          />
          <ProjectDetail projectDetail={projectDetail} />
        </div>
      )}
    </div>
  );
}
