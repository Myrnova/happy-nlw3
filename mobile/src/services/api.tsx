import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_IP_API}${process.env.REACT_APP_PORT_API}/`
})

export default api;