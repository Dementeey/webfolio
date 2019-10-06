import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from 'app/containers/App'
import history from 'helpers/history'
import 'assets/styles/_global.scss'

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
