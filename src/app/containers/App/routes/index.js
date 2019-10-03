import React from 'react'
import { Switch, Route } from 'react-router-dom'
import config from './config'
import NotFound from 'app/containers/NotFound'

function Routes() {
  const routes = config.map(({ exact = false, path, component: Component }) => (
    <Route key={path} exact={exact} path={path} component={Component} />
  ))

  return (
    <Switch>
      {routes}

      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
