import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const { location } = history

const routes = (
  <HashRouter>
    <div>
      <Route path="/m" component={Container} />
      <Route path="/login" component={Login} />
      {location.hash === '#/' ? <Redirect to="/login" /> : ''}
    </div>
  </HashRouter>
)

export default routes
