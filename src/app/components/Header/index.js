import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

function App({ classes }) {
  return <div className={classes.wrapper}>Header</div>
}

export default injectSheet(styles)(App)
