import axios from 'axios';
import {Platform} from 'react-native';

// const apiEndpoint =
//   // Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://192.168.29.82:4000';
//   Platform.OS === 'ios'
//     ? 'http://localhost:4000'
//     : 'https://handpump.onrender.com';

const handleError = (err: any) => {
  var message = '';
  const {data} = err.response;
  message = data.message;
  return Promise.reject({message});
};

function isNetworkError(err: any) {
  return !!err.isAxiosError && !err.response;
}

export const initializeAxios = async () => {
  axios.defaults.baseURL = apiEndpoint;

  console.log('Axios default endpoit set');

  if (axios.interceptors.request.handlers.length === 0) {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (isNetworkError(error)) {
          const message = 'Network Error';
          return Promise.reject({message});
        } else {
          return handleError(error);
        }
      },
    );
  }
};
