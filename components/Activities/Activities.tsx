import React from 'react';
import styles from './Activities.module.scss';
import { motion } from 'framer-motion';
import activityData from './Activities.json';

export default function Activities() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Activities</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ ease: 'easeInOut', duration: 2, y: { duration: 1 } }}
        className={styles.activity}
        id="activity"
      >
        {activityData.map((activity, index) => (
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: 'easeInOut', duration: 2, y: { duration: 1 } }}
            key={index}
            className={styles.activity_item}
          >
            <div className={styles.activity_div}>
              <h3 className={styles.activity_name}>{activity.activity_name}</h3>
              <p className={styles.activity_period}>{activity.period}</p>
            </div>
            <p className={styles.activity_description}>
              {activity.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
