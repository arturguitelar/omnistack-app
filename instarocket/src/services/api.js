import axios from 'axios';
import urlApi from '../configs/urlApi';

const api = axios.create({
    baseURL: urlApi
});

export default api;
