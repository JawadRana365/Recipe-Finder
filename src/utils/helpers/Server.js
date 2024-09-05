import axios from 'axios';
import configurationData from "../constatnts/constants.json"
import { toast } from 'react-toastify';

const token = ""

const axiosClient = axios.create({
    baseURL: configurationData.serverBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})

axiosClient.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        toast.error("Something Wents Wrong...!")
        return Promise.reject(error)
    }
)

export default axiosClient;