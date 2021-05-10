
import React from 'react'
// 路由
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Axios from 'axios'



import BaseLayout from './layouts/BaseLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import './base.less'

Axios.defaults.baseURL = 'http://localhost:9090'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route 
          path='/login'
          component={ Login }
        />

        <Route 
          path='/register'
          component={ Register }
        />

        <Route 
          path='/' 
          component={BaseLayout} 
        />
      </Switch>
    </Router>
  )
}

export default App