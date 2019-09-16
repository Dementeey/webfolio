import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'
import Header from '../../components/Header'
import Routes from './routes'

function App({ classes }) {
  return (
    <div className={classes.app}>
      <Header />

      <main className={classes.content}>
        <Routes />
      </main>

      <footer className={classes.footer}>Footer</footer>
    </div>
  )
}

export default injectSheet(styles)(App)
