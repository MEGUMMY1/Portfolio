import React from 'react';
import styles from './ProjectDetail.module.scss';
import { ProjectDetailProps } from './ProjectDetail.types';

export default function ProjectDetail({ projectDetail }: ProjectDetailProps) {
  return (
    projectDetail && (
      <div className={styles.project_detail}>
        <h2 className={styles.title}>{projectDetail.title}</h2>
        <p className={styles.service_description}>
          {projectDetail.details.serviceDescription}
        </p>

        <h3 className={styles.subheading}>Features</h3>
        <p className={styles.listItem}>{projectDetail.details.features}</p>

        <h3 className={styles.subheading}>Technologies</h3>
        <div className={styles.list}>
          {projectDetail.details.technologies.map((tech, index) => (
            <button key={index} className={styles.list_item}>
              {tech}
            </button>
          ))}
        </div>

        <h3 className={styles.subheading}>Contributions</h3>
        <p className={styles.listItem}>{projectDetail.details.contributions}</p>

        {projectDetail.details.troubleshooting && (
          <>
            <h3 className={styles.subheading}>Troubleshooting</h3>
            <p className={styles.troubleshooting}>
              {projectDetail.details.troubleshooting}
            </p>
          </>
        )}

        <div className={styles.project_images}>
          {projectDetail.details.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    )
  );
}
