import React from "react";
import styles from "./Button.module.css"

export default function Button({ type, label }) {
    const buttonClass =
    type === "primary" ? styles.primary : styles.button;

  return <button className={buttonClass}>{label}</button>;
}