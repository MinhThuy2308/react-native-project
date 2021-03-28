import axios from 'axios';
// import { isToken, getToken, setToken } from '../utils/hooks/useAuth';
import AsyncStorage from '@react-native-community/async-storage';

const MIX_BASE_API = 'http://10.0.2.2:1337'
const service = axios.create({
  baseURL: MIX_BASE_API,
  timeout: 10000, // Request timeout
});

// Request intercepter
service.interceptors.request.use(
  async config => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      config.headers['Authorization'] = 'Bearer ' + userToken; // Set JWT token
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    if (response.headers.authorization) {
      setToken(response.headers.authorization);
      response.data.token = response.headers.authorization;
    }

    return response.data;
  },
  error => {
    let message = error.message;
    // if (error.response.data && error.response.data.errors) {
    //   message = error.response.data.errors;
    // } else if (error.response.data && error.response.data.error) {
    //   message = error.response.data.error;
    // }

    console.log('error request', message);
    // Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // });
    return Promise.reject(error);
  }
);

export default service;