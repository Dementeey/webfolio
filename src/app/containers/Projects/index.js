import React from 'react'
import styles from './index.module.scss'
import ProjectsSideBar from 'app/components/ProjectsSideBar'
import projects from 'data/projects.config'

function Projects() {
  return (
    <div className={styles.wrapper}>
      <ProjectsSideBar config={projects} />
    </div>
  )
}

export default Projects
