import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      last_name: newUser.last_name,
      email: newUser.email,
      username: newUser.username,
      first_name: newUser.first_name,
      password: newUser.password
    })
    .then(response => {
      console.log(' Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
