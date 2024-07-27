import { modalState } from '@/states/modalState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import styles from './Modal.module.scss';

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  useEffect(() => {
    if (modal.isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [modal.isOpen]);

  return modal.isOpen ? (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.title}>팀원 리뷰</p>
        <div className={styles.content}>{modal.content}</div>
        <Image
          src="/icon/close.svg"
          width={20}
          height={20}
          onClick={closeModal}
          alt="close button"
          className={styles.close_button}
          tabIndex={0}
        />
      </div>
    </div>
  ) : null;
}
