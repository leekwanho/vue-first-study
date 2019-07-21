import axios from 'axios'

export default {
  async login (uid, password) {
    let params = new URLSearchParams()
    params.append('id', uid)
    params.append('password', password)

    return axios.post('http://localhost:8090/login', params)
      .then(res => { return res })
      .catch(err => console.error(err))
  }
}
