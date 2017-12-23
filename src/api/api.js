import axios from 'axios'

export default {
  getyesno () {
    return axios.get('https://yesno.wtf/api')
  }
}
