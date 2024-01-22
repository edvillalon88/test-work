import axios from 'axios';
//este dato normalmente estaria en una variable de entorno
const domain = `http://localhost:8080`;

export const getBlogsPromise = (search)=>{
    const url = `${domain}/actions${(search && search !== '') ? `?search=${search}`: ''}`
    return axios.get(url);
}
export const getBlogPromise = (id)=>{
    const url = `${domain}/actions/${id}`
    return axios.get(url);
}
export const saveBlogPromise = (data)=>{
    const url = `${domain}/actions`
    return axios.post(url,{ blog: data });
}