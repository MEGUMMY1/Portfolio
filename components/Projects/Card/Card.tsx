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
  reflection,
  onClick,
}: CardProps) {
  const handleEnterKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <div className={styles.container} tabIndex={0} onKeyDown={handleEnterKey}>
      <div className={styles.image_container} onClick={onClick}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={240}
          height={130}
        />
      </div>
      <div className={styles.content}>
        <div onClick={onClick} tabIndex={0} onKeyDown={handleEnterKey}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.links}>
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
          {reflection && (
            <Link href={reflection} target="_blank">
              <Image
                src="/icon/write.svg"
                width={30}
                height={30}
                alt="reflection icon"
                className={styles.link}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
