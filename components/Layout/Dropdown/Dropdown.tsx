import React from 'react';
import styles from './Dropdown.module.scss';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EMAIL_ADDRESS = 'cys10902@naver.com';

export default function Dropdown({ onClose }: { onClose: () => void }) {
  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    onClose();
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
      toast.success('이메일 주소가 클립보드에 복사되었습니다.', {
        className: styles.toastSuccess,
      });
    });
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link href="https://github.com/MEGUMMY1" passHref>
        <div className={`${styles.dropdown_button} ${styles.first_button}`}>
          <Image
            src="/icon/github.svg"
            width={30}
            height={30}
            alt="깃허브 아이콘"
          />
          Github
        </div>
      </Link>
      <Link href="https://velog.io/@megummy1" passHref>
        <div className={styles.dropdown_button}>
          <Image
            src="/icon/blog.svg"
            width={30}
            height={30}
            alt="블로그 아이콘"
          />
          Blog
        </div>
      </Link>
      <div
        className={`${styles.dropdown_button} ${styles.last_button}`}
        onClick={handleCopyEmail}
        tabIndex={0}
      >
        <Image src="/icon/mail.svg" width={30} height={30} alt="메일 아이콘" />
        Mail
        <Image src="/icon/copy.svg" width={20} height={20} alt="복사 버튼" />
      </div>
    </div>
  );
}
