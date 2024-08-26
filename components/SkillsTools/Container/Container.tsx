import React from 'react';
import styles from './Container.module.scss';
import { ContainerProps } from './Container.types';
import Icon from '../Icon/Icon';

export default function Container({ title, icon }: ContainerProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.icon_container} tabIndex={0}>
        {icon.map((iconData, index) => (
          <Icon key={index} image={iconData.image} title={iconData.title} />
        ))}
      </div>
    </div>
  );
}
