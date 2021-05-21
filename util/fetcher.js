import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005/api' : `https://${process.env.VUE_APP_SITE_NAME}/api`;

const publicFetch = axios.create({
    baseURL
})

export { publicFetch, baseURL }
