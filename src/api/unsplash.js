import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 884764d376e263afe3fb88162ccb0e8ddf3445a83fd827f824d8f7372c48f836'
    }
});