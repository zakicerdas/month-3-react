import React from "react";
import styles from "./dynamic.module.css"

function DynamicCard({status, content}) {
    const getStatusClass = () => {
    switch (status) {
      case 'success':
        return styles.success;
      case 'warning':
        return styles.warning;
      case 'error':
        return styles.error;
      default:
        return '';
    }
  };
  return(
       <div className={styles.card}>
        <p className={styles.content}>{content}</p>
        <span className={`${styles.status} ${getStatusClass()}`}>{status}</span>
       </div>
  )
}

export default DynamicCard;