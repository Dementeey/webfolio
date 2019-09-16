import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

function Header({ classes }) {
  return <header className={classes.wrapper}>Header</header>
}

export default injectSheet(styles)(Header)
