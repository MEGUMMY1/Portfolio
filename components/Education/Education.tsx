import React from 'react';
import styles from './Education.module.scss';

export default function Education() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.items}>
        <div className={styles.item_container}>
          <h2 className={styles.h2}>순천향대학교</h2>
          <h3 className={styles.h3}>컴퓨터소프트웨어공학과 졸업</h3>
          <h4 className={styles.h4}>2020.03 ~ 2024.02</h4>
          <h5 className={styles.h5}>
            <p>· 동아리 활동(멋쟁이 사자처럼, 아이고, SW프런티어)</p>
            <p>· 학과 부학회장(2022)</p>
          </h5>
        </div>
        <div className={styles.item_container}>
          <h2 className={styles.h2}>코드잇 스프린트</h2>
          <h3 className={styles.h3}>프론트엔드 부트캠프 수료</h3>
          <h4 className={styles.h4}>2024.02 ~ 2024.08</h4>
          <h5 className={styles.h5}>
            <p>· 스터디 참여(코어 자바스크립트)</p>
            <p>· 매일 팀원들과 지식 공유 및 회의</p>
            <p>· 팀 프로젝트 3회</p>
            <p>· 주 2회 멘토링 및 코드 리뷰</p>
          </h5>
        </div>
      </div>
    </div>
  );
}
