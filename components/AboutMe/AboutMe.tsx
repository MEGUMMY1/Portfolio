import React from 'react';
import styles from './AboutMe.module.scss';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/states/modalState';
import ModalContent from '../Modal/ModalContent/ModalContent';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const setModal = useSetRecoilState(modalState);

  const openModal = () => {
    setModal({
      isOpen: true,
      content: <ModalContent />,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h1 className={styles.title}>About me</h1>
        <Image
          src="/image/aboutme_bg.svg"
          width={500}
          height={500}
          alt="혜진 이미지"
          className={styles.image}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ ease: 'easeInOut', duration: 2, y: { duration: 1 } }}
        className={styles.bubble_container}
        id="activity"
      >
        <div className={styles.speech_bubble}>
          안녕하세요. Front-end 주니어 개발자 조혜진입니다.
        </div>
        <div className={styles.speech_bubble}>
          저는 꼼꼼하고 계획적이며 끈기있는 성격입니다.
        </div>
        <div className={styles.speech_bubble}>
          지속적으로 배우며 꾸준히 성장하는 개발자가 되고 싶습니다.
        </div>
        <div className={styles.speech_bubble}>
          모두가 함께 일하고 싶어하는 동료가 되고 싶습니다.
        </div>
        <div className={styles.speech_bubble}>
          누구나 편리하게 사용할 수 있도록 사용자의 입장을 생각하고, 서비스를
          만드는 개발자가 되고 싶습니다.
        </div>
      </motion.div>
      <button className={styles.review_button} onClick={openModal} tabIndex={0}>
        팀원 리뷰 보러가기
      </button>
    </div>
  );
}
