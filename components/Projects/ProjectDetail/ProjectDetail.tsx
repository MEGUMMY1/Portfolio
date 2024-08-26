import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './ProjectDetail.module.scss';
import { ProjectDetailProps } from './ProjectDetail.types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../ArrowButton/ArrowButton';
import useIsMobile from '@/hooks/useIsMobile';

export default function ProjectDetail({ projectDetail }: ProjectDetailProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  // 방향키로 스크롤 제어 및 Esc 키로 슬라이더 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (containerRef.current) {
        const { current } = containerRef;

        if (event.key === 'ArrowDown') {
          current.scrollBy({ top: 100, behavior: 'smooth' });
        } else if (event.key === 'ArrowUp') {
          current.scrollBy({ top: -100, behavior: 'smooth' });
        } else if (event.key === 'Escape') {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    projectDetail && (
      <div className={styles.container} ref={containerRef}>
        <div className={styles.project_detail}>
          <h2 className={styles.title}>{projectDetail.title}</h2>
          {isMobile ? (
            // 모바일: 이미지 슬라이드
            <>
              <Slider
                {...sliderSettings}
                className={styles.single_image_slider}
              >
                {projectDetail.details.images.map((image, index) => (
                  <div
                    key={index}
                    className={styles.fullscreen_image_container}
                  >
                    <Image
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      objectFit="contain"
                      className={styles.image}
                    />
                  </div>
                ))}
              </Slider>
              <p className={styles.message}>
                이미지를 좌우로 움직이면 다음 이미지가 보입니다.
              </p>
            </>
          ) : (
            // PC: 이미지 클릭하여 전체 화면 이미지 슬라이드
            <>
              <div
                className={styles.single_image_wrapper}
                onClick={handleImageClick}
              >
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
            </>
          )}
          {isFullscreen && (
            <div
              className={styles.fullscreen_overlay}
              onClick={handleCloseFullscreen}
            >
              <Slider {...sliderSettings} className={styles.fullscreen_slider}>
                {projectDetail.details.images.map((image, index) => (
                  <div
                    key={index}
                    className={styles.fullscreen_image_container}
                  >
                    <Image
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      objectFit="contain"
                      className={styles.fullscreen_image}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <p className={styles.description}>
            {formatText(projectDetail.details.serviceDescription)}
          </p>
          <div className={styles.bar} />
          <h3 className={styles.subheading}>주요 기능 및 특징</h3>
          <ul className={styles.item_list}>
            {projectDetail.details.features.map((feature, index) => (
              <li key={index} className={styles.item}>
                {feature}
              </li>
            ))}
          </ul>
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
          <ul className={styles.item_list}>
            {projectDetail.details.contributions.map((item, index) => (
              <li key={index} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
          {projectDetail.details.troubleshooting && (
            <>
              <div className={styles.bar} />
              <h3 className={styles.subheading}>TroubleShooting</h3>
              <p className={styles.issue_description}>
                {formatText(projectDetail.details.troubleshooting)}
              </p>
            </>
          )}
        </div>
      </div>
    )
  );
}
