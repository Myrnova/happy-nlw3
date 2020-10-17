import axios from 'axios';

const url = `${process.env.REACT_APP_IP_API}${process.env.REACT_APP_PORT_API}`
console.log(url);
const api = axios.create({
    baseURL: url
})

export default api;