import React from 'react'
import styles from './index.module.scss'
import About from 'app/components/About'
import Button from 'app/components/Button'
import { NavLink } from 'react-router-dom'

function downloadCV() {
  console.log('"download"-->>> \n', 'download cv')
}

function Home() {
  return (
    <div className={styles.wrapper}>
      <About />

      <div className={styles.btnWrapper}>
        <NavLink className={styles.link} to="/projects">
          My Projects
        </NavLink>
        <Button onClick={downloadCV}>Download CV</Button>
      </div>
    </div>
  )
}

export default Home
