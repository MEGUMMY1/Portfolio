import React from 'react';
import styles from './Certifications.module.scss';
import Certification from './Certification/Certification';

export default function Certifications() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Certifications</h1>
      <div className={styles.button_container}>
        <div className={styles.button1}>
          <Certification
            title="정보처리기사"
            date="2023.11"
            host="과학기술정보통신부"
          />
        </div>
        <div className={styles.button2}>
          <Certification
            title="컴퓨터활용능력 1급"
            date="2022.03"
            host="대한상공회의소"
          />
        </div>
        <div className={styles.button3}>
          <Certification
            title="GTQ 포토샵 1급"
            date="2021.03"
            host="한국생산성본부"
          />
        </div>
      </div>
    </div>
  );
}
