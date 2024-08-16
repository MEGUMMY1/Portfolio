import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './ProjectDetail.module.scss';
import { ProjectDetailProps } from './ProjectDetail.types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProjectDetail({ projectDetail }: ProjectDetailProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsFullscreen(false);
    }
  };

  // 줄바꿈을 HTML 태그로 변환하는 함수
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    projectDetail && (
      <div className={styles.container}>
        <div className={styles.project_detail}>
          <h2 className={styles.title}>{projectDetail.title}</h2>
          <div className={styles.singleImageWrapper} onClick={handleImageClick}>
            <Image
              src={projectDetail.details.images[0]}
              alt="Project image"
              layout="fill"
              objectFit="contain"
              className={styles.image}
            />
          </div>
          <p className={styles.message}>
            위 이미지를 클릭하면 프로젝트 상세 이미지 슬라이드가 열립니다.
          </p>
          {isFullscreen && (
            <div
              className={styles.fullscreenOverlay}
              onClick={handleCloseFullscreen}
            >
              <Slider {...sliderSettings} className={styles.fullscreenSlider}>
                {projectDetail.details.images.map((image, index) => (
                  <div key={index} className={styles.fullscreenImageContainer}>
                    <Image
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      objectFit="contain"
                      className={styles.fullscreenImage}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <p className={styles.description}>
            ＞ {formatText(projectDetail.details.serviceDescription)}
          </p>
          <div className={styles.bar} />
          <h3 className={styles.subheading}>주요 기능 및 특징</h3>
          <p className={styles.description}>
            {formatText(projectDetail.details.features)}
          </p>
          <div className={styles.bar} />
          <h3 className={styles.subheading}>사용 기술 및 언어</h3>
          <div className={styles.list}>
            {projectDetail.details.technologies.map((tech, index) => (
              <button key={index} className={styles.tech_button}>
                {tech}
              </button>
            ))}
          </div>
          <div className={styles.bar} />
          <h3 className={styles.subheading}>기여한 작업</h3>
          <ul className={styles.description}>
            {projectDetail.details.contributions
              .split('/ ')
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          {projectDetail.details.troubleshooting && (
            <>
              <h3 className={styles.subheading}>TroubleShooting</h3>
              <p className={styles.description}>
                {formatText(projectDetail.details.troubleshooting)}
              </p>
            </>
          )}
        </div>
      </div>
    )
  );
}
