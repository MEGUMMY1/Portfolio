import React, { useState } from 'react';
import styles from './ModalContent.module.scss';

const tabs = [
  {
    label: '강　점',
    content: (
      <ul className={styles.line}>
        <li>✔️ 팀장으로서 팀을 잘 이끌어주신 점이 인상깊었습니다.</li>
        <li>
          ✔️ 팀 분위기 메이커! 어색함 없이 팀원들과 소통하고 편한 분위기를
          만들어주셔서 팀 활동이 더 즐거웠습니다.
        </li>
        <li>
          ✔️ 사소한 질문에도 세세하게 답변해줌, 남들이 안 하려는 일을 자진해서
          지원함.
        </li>
        <li>✔️ 팀원이 어려워 하는 파트를 대신 맡아서 해주었습니다.</li>
        <li>✔️ 분배가 안된 파트를 알아서 다 해주셨습니다.</li>
        <li>
          ✔️ 밤낮 구분없이 작업을 해 마감일 안에 프로젝트를 잘 마무리 할 수
          있었습니다.
        </li>
      </ul>
    ),
  },
  {
    label: '보완해야 할 점',
    content: (
      <ul className={styles.line}>
        <li>
          ✔️ 팀 프로젝트 및 개인 학습 목표 설정 시 좀 더 명확하게 하여 팀원들과
          공유하면 더 좋을 것 같습니다.
        </li>
        <li>
          ✔️ 불만이나 피드백을 조금 명확하고 뚜렷하게 말씀해주시면 좋을 것 같다.
        </li>
      </ul>
    ),
  },
];

export default function ModalContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
}
