import React, { useState } from 'react'
import cls from 'classnames'

import styles from './index.module.scss'
import history from 'helpers/history'
import Button from '../Button'

function ProjectsSideBar({ path = '/projects', config = [] }) {
  const [search, setSearch] = useState('')
  function selectItem(hash) {
    history.push(`${path}#${hash}`)
  }

  function onSearch({ target: { value } }) {
    setSearch(value)
  }

  function onClearSearch() {
    setSearch('')
  }

  const sideBarItems = config.map(({ title, items }) => (
    <li key={title} className={styles.item}>
      <h3>{title}</h3>
      <ul className={styles.sublist}>
        {items
          .filter(({ label }) => label.includes(search))
          .map(({ label, hash }) => (
            <li
              onClick={() => selectItem(hash)}
              key={hash}
              className={cls(styles.item, {
                [styles.item_active]: history.location.hash === `#${hash}`
              })}
            >
              {label}
            </li>
          ))}
      </ul>
    </li>
  ))

  return (
    <aside className={styles.side_bar}>
      <div className={styles.search}>
        <input value={search} onChange={onSearch} />

        {search ? (
          <Button onClick={onClearSearch}>Clear</Button>
        ) : (
          <Button onClick={onSearch}>Search</Button>
        )}
      </div>

      <ul>{sideBarItems}</ul>
    </aside>
  )
}

export default ProjectsSideBar
