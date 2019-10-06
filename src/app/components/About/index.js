import React from 'react'
import styles from './index.module.scss'
import cv from 'data/cv.json'
import src from 'assets/images/avatar.jpg'

function About() {
  const { title, text } = cv
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.avatar}>
        <img src={src} alt="My Avatar" />
      </div>

      <div className={styles.description}>{text}</div>
    </div>
  )
}

export default About
