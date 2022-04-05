import http from "./BaseServices";


export const getUsers = () => http.get('/users');

export const getComments = () => http.get('/comments')



