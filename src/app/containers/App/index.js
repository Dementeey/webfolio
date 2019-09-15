import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

function App({ classes }) {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Title</h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={classes.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  )
}

export default injectSheet(styles)(App)
