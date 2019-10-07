import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import cls from 'classnames'

import styles from './index.module.scss'
import ProjectsSideBar from 'app/components/ProjectsSideBar'
import Codepen from 'app/components/Codepen'
import projects from 'data/projects.config'

function Projects({ location }) {
  const [isOpen, setOpen] = useState(true)
  const isRender = location.hash

  function getProjectValue(key) {
    const separator = '.'
    let result = ''

    projects.forEach(({ items }) => {
      result = items.reduce((init, item) => {
        if (location.hash === `#${item.hash}`) {
          return key.includes(separator)
            ? item[key.split(separator)[0]][key.split(separator)[1]]
            : item[key]
        }

        return init
      }, '')
    })

    return result
  }

  function toggleSideBar() {
    setOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={toggleSideBar}
        className={cls(styles.burger, styles.toggle_side_bar, {
          [styles.toggle_side_bar_hide]: !isOpen,
          [styles.toggle_side_bar_open]: isOpen
        })}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>

      <div
        className={cls(styles.side_bar_wrapper, {
          [styles.side_bar_wrapper_hide]: !isOpen
        })}
      >
        <ProjectsSideBar config={projects} />
      </div>

      <div
        className={cls(styles.content_wrapper, {
          [styles.content_wrapper_fullscreen]: !isOpen
        })}
      >
        <div className={styles.content}>
          {isRender && (
            <>
              <div className={styles.info}>
                <h2 className={styles.title}>
                  {getProjectValue('info.title')}
                </h2>
                <p className={styles.description}>
                  {getProjectValue('info.description')}
                </p>

                <h3>Arguments:</h3>
                <p className={styles.description}>
                  {getProjectValue('info.arguments')}
                </p>

                <h3>Returns:</h3>
                <p className={styles.description}>
                  {getProjectValue('info.returns')}
                </p>

                <h3>Examples:</h3>
                <p className={styles.description}>
                  {getProjectValue('info.examples')}
                </p>
              </div>

              <Codepen src={getProjectValue('src')} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Projects)
