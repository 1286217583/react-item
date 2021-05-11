
import { React } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({
  component: Component, 
  user,
  path,
}) => {
  return (
    <Route
      path={ path }
      render={(props) => {
        if (user) {
          return <Component {...props}></Component>
        } else {
          return <Redirect to={{
            pathname: '/login',
            state: {
              Redirect: props.match.url
            }
          }}></Redirect>
        }
      }}
    >
    </Route>
  )
}

export default connect(
  (state) => {
    return {
      user: state.user
    }
  }
)(PrivateRoute)
