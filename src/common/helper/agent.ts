import axios from 'axios';
import { store } from '../../redux/store';


const agentService = axios.create({
    baseURL : "http://localhost:3000/api",
    headers : {
        'Content-Type' : 'application/json'
    },
});
agentService.interceptors.request.use(
    (config) => {
        const accessToken = store.getState().auth.token;
        if(accessToken)
        {
            config.headers.Authorization = `Bearer ${accessToken}`
            
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default agentService;