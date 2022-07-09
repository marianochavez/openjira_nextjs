import axios from 'axios';

// Como sale directamente del servidor en que se encuentre
// no es necesario poner la baseURL completa

const entriesApi = axios.create({
    baseURL: '/api',
})

export default entriesApi;