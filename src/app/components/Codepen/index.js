import React from 'react'
import styles from './index.module.scss'

function CodeEditor({ src }) {
  const url = `https://codepen.io/mattdesl/embed/preview/${src}?height=257&preview=true&theme-id=1&slug-hash=${src}&default-tab=js&user=dementeey&name=cp_embed_1`

  return (
    <div className={styles.wrapper}>
      <h3>Try:</h3>
      <iframe
        frameBorder="none"
        width="400"
        height="300"
        title="Codepen.io"
        src={url}
      />
    </div>
  )
}

export default CodeEditor
