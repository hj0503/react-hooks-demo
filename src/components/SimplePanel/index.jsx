import React from 'react'
import styles from './SimplePanel.less'

export default function SimplePanel({children, title}) {
  return (
    <div className={styles.simplePanel}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}