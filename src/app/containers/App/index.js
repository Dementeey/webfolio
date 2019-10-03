import React from 'react'
import styles from './index.module.scss'
import NavBar from '../../components/NavBar'
import Routes from './routes'

function App() {
  return (
    <>
      <NavBar />

      <main className={styles.content}>
        <Routes />
      </main>
    </>
  )
}

export default App
