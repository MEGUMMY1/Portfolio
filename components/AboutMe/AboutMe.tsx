import React, { useState, useEffect } from 'react';
import styles from './AboutMe.module.scss';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/states/modalState';
import ModalContent from '../Modal/ModalContent/ModalContent';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';

const speechBubbles = [
  '안녕하세요. Front-end 주니어 개발자 조혜진입니다.',
  '저는 꼼꼼하고 계획적이며 끈기있는 성격입니다.',
  '지속적으로 배우며 꾸준히 성장하는 개발자가 되고 싶습니다.',
  '모두가 함께 일하고 싶어하는 동료가 되고 싶습니다.',
  '누구나 편리하게 사용할 수 있도록 사용자의 입장을 생각하고, 서비스를 만드는 개발자가 되고 싶습니다.',
];

export default function AboutMe() {
  const setModal = useSetRecoilState(modalState);
  const [currentBubbleIndex, setCurrentBubbleIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentBubbleIndex(
          (prevIndex) => (prevIndex + 1) % speechBubbles.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const openModal = () => {
    setModal({
      isOpen: true,
      content: <ModalContent />,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.image} />
      <div className={styles.bubble_container} id="activity">
        <AnimatePresence mode="wait">
          {isMobile ? (
            <motion.div
              key={currentBubbleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.speech_bubble}
            >
              {speechBubbles[currentBubbleIndex]}
            </motion.div>
          ) : (
            speechBubbles.map((bubble, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                className={styles.speech_bubble}
              >
                {bubble}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      <button className={styles.review_button} onClick={openModal} tabIndex={0}>
        팀원 리뷰 보러가기
      </button>
    </div>
  );
}
