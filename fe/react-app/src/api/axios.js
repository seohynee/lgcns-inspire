import axios from 'axios';

const endPoint = process.env.REACT_APP_BACKEND_ENDPOINT;

// api 설정?
const api = axios.create({
        baseURL : endPoint
});

export default api;