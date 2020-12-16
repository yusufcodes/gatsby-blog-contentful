import React from "react"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.main}>
      <a className={styles.link} href="/">
        <p>yusufcodes</p>
      </a>
    </div>
  )
}
