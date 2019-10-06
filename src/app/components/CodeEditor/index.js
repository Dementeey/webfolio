import React from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/solarized_dark'

function CodeEditor({ value }) {
  // function onChange(newValue) {
  //   console.log('change', newValue)
  // }

  console.log('value-->>> \n', value)

  return (
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
  )
}

export default CodeEditor
