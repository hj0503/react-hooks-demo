import React from 'react'
import styles from './Row.less'

export default function Row({children, label}) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}