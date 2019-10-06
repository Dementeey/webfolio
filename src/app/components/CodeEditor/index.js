import React from 'react'
import AceEditor from 'react-ace'
import styles from './index.module.scss'
import 'brace/mode/javascript'
import 'brace/theme/solarized_dark'

function CodeEditor({ value }) {
  // function onChange(newValue) {
  //   console.log('change', newValue)
  // }
  const template = `
      <!doctype html>
      <html lang="en">
      <head>
        <title>Document</title>
        <meta charset="UTF-8">
        <style>
         * {
             color: white;
         }
        </style>
      </head>
      <body>
        <h1>
            Lalala
        </h1>
        
        <script>
            const div = document.createElement('div')
            div.innerText = 'Hello!'
            document.body.append(div)
        </script>
      </body>
      </html>
      `

  function str2ab(str) {
    const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
    const bufView = new Uint16Array(buf)

    for (let i = 0, strLen = str.length; i < strLen; i += 1) {
      bufView[i] = str.charCodeAt(i)
    }

    return buf
  }

  const src = str2ab(template)
  // TODO -- Need testing convert template to blob
  console.log('src-->>> \n', src)

  return (
    <div className={styles.wrapper}>
      <AceEditor
        mode="javascript"
        theme="solarized_dark"
        name="javascript"
        // onChange={onChange}
        value={value}
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        setOptions={{
          showLineNumbers: true,
          tabSize: 2
        }}
      />

      <iframe frameBorder="none" width="400" src={src} />
    </div>
  )
}

export default CodeEditor
