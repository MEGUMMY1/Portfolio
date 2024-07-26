import React from 'react';
import styles from './Certification.module.scss';
import { CertificationProps } from './Certification.types';

export default function Certification({
  title,
  date,
  host,
}: CertificationProps) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.host}>{host}</p>
    </div>
  );
}
