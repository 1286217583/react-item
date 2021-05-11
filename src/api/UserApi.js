import Axios from 'axios'

/**
 * 注册用户
 * @param {Object} data
 */
export const SignUp = (data) => {
  return Axios.post('/sign-up', data)
}

/**
 * 用户登录
 * @params {Object} data
 */
export const SignIn = (data) => {
  return Axios.post('sign-in', data)
}
