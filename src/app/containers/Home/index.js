import React from 'react'
import styles from './index.module.scss'
import About from 'app/components/About'

function Home() {
  return (
    <div className={styles.wrapper}>
      <About />
    </div>
  )
}

export default Home
