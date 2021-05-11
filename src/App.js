
import React from 'react'
// 路由
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Axios from 'axios'

import { Provider } from 'react-redux'

import BaseLayout from './layouts/BaseLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import './base.less'
import store from './store'
import PrivateRoute from './utils/PrivateRoute'

Axios.defaults.baseURL = 'http://localhost:9090'

const App = () => {
  return(
    <Provider store={store}>
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

          <PrivateRoute 
            path='/' 
            component={BaseLayout} 
          ></PrivateRoute>
          
        </Switch>
      </Router>
    </Provider>
  )
}

export default App