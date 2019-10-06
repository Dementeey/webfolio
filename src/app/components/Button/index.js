import React from 'react'
import styles from './index.module.scss'

function Button({ children, loading, disabled, ...restProps }) {
  return (
    <button
      className={styles.button}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
