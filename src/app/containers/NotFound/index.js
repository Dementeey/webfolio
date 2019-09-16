import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

function NotFound({ classes }) {
  return <div className={classes.wrapper}>Oops... 404. This rout not found</div>
}

export default injectSheet(styles)(NotFound)
