import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { CardProps } from './Card.types';
import Link from 'next/link';

export default function Card({
  title,
  description,
  image,
  github,
  link,
  figma,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={240}
          height={130}
        />
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.links}>
          {github && (
            <Link href={github} target="_blank">
              <Image
                src="/icon/github_icon.svg"
                width={30}
                height={30}
                alt="github icon"
                className={styles.link}
              />
            </Link>
          )}
          {link && (
            <Link href={link} target="_blank">
              <Image
                src="/icon/site_icon.svg"
                width={30}
                height={30}
                alt="link icon"
                className={styles.link}
              />
            </Link>
          )}
          {figma && (
            <Link href={figma} target="_blank">
              <Image
                src="/icon/figma_icon.svg"
                width={30}
                height={30}
                alt="figma icon"
                className={styles.link}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
