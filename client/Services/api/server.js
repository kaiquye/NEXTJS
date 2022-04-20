import Axios from 'axios';
import { parseCookies } from 'nookies'

export default Axios.create({
    baseURL: 'http://localhost:8081/',
})
