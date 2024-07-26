import React, { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { HeaderProps } from './Header.types';
import Dropdown from '../Dropdown/Dropdown';
import Link from 'next/link';

export default function Header({ url }: HeaderProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.color_button_container}>
        <div className={styles.color_button} />
        <div className={styles.color_button} />
        <div className={styles.color_button} />
      </div>
      <div className={styles.button_container}>
        <button className={styles.button_bg}>
          <Image
            src="/icon/left_arrow.svg"
            width={40}
            height={40}
            alt="왼쪽 화살표"
          />
        </button>
        <button className={styles.button_bg}>
          <Image
            src="/icon/right_arrow.svg"
            width={40}
            height={40}
            alt="왼쪽 화살표"
          />
        </button>
        <Link href="/">
          <button className={styles.button_bg}>
            <Image
              src="/icon/home.svg"
              width={30}
              height={30}
              alt="메인 이동 버튼"
            />
          </button>
        </Link>
      </div>
      <div className={styles.search_bar}>
        <Image
          src="/icon/search.svg"
          width={30}
          height={30}
          alt="검색 아이콘"
        />
        <p className={styles.url_text}>{url}</p>
      </div>
      <button className={styles.button_bg} onClick={toggleDropdown}>
        <Image
          src="/icon/hamburger.svg"
          width={30}
          height={30}
          alt="드롭다운 버튼"
        />
      </button>
      {isDropdownOpen && <Dropdown onClose={toggleDropdown} />}
    </div>
  );
}
