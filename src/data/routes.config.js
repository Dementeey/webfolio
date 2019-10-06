import Home from 'app/containers/Home'
import Projects from 'app/containers/Projects'

export default [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/projects',
    component: Projects
  }
]
