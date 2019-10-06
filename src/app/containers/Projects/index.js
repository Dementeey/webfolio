import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import cls from 'classnames'

import styles from './index.module.scss'
import ProjectsSideBar from 'app/components/ProjectsSideBar'
import CodeEditor from 'app/components/CodeEditor'
import projects from 'data/projects.config'

function Projects({ location }) {
  const [isOpen, setOpen] = useState(true)

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
        className={cls(styles.content, {
          [styles.fullscreen_content]: !isOpen
        })}
      >
        <h2 className={styles.title}>{getProjectValue('info.title')}</h2>

        {location.hash && <CodeEditor value={getProjectValue('example')} />}
      </div>
    </div>
  )
}

export default withRouter(Projects)
