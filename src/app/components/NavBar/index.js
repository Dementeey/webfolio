import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import navRoutsConfig from 'data/navRoutsConfig'
import navConfig from 'data/navConfig'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          {navRoutsConfig.map(({ label, to, exact }) => (
            <NavLink
              key={to}
              to={to}
              exact={exact}
              className={styles.link}
              activeClassName={styles.link_active}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className={styles.inner_wrapper}>
          {navConfig.map(({ label, link, title }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              title={title}
              className={styles.link}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
