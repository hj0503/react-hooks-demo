import React from 'react';
import styles from './Section.less';
export default function Section({ children, title, className = null }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.title}>{title}</div>
      {children}
    </section>
  );
}
