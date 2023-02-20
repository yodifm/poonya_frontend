import axios from 'axios';

const API = axios.create({baseURL: 'https://express.studiopoonya.com'});

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// });

//User API
export const getuser = () => API.get('/users');
export const getuserbyid = (formData) => API.get(`/users/id/${formData}`);
export const getuserbyusername = (formData) => API.get(`/users/username/${formData}`);
export const getuserbyroles = (formData) => API.get(`/users/roles/${formData}`);
export const createuser = (formData) => API.post('/users', formData);


//Ticket API
export const getticket = () => API.get('/ticket');
export const getticketbyid = (formData) => API.get(`/ticket/id/${formData}`);
export const getticketused = (formData) => API.get(`/ticket/used/${formData}`);
export const getticketbyusername = (formData) => API.get(`/ticket/username/${formData}`);
export const createticket = (formData) => API.post('/ticket', formData);

//Payment API
export const getpayment = () => API.get('/payment');
export const getpaymentbyticketid = (formData) => API.get(`/payment/ticketid/${formData}`);
export const getpaymentbyusername = (formData) => API.get(`/payment/username/${formData}`);
export const getpaymentbynumber = (formData) => API.get(`/payment/number/${formData}`);
export const getpaymentbystatus = (formData) => API.get(`/payment/status/${formData}`);
export const createpayment = (formData) => API.post('/payment', formData);