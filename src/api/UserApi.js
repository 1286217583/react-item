import Axios from 'axios'


export const SignUp = (data) => {
  return Axios.post('/sign-up', data)
}