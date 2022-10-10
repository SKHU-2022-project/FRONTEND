import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://10.0.160.28:8080/',
});

function requestInterceptor(config) {
  return {
    ...config,
    // ! API KEY가 있다면 받을 것
    // headers: {
    //   Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    // },
  };
}

instance.interceptors.request.use(requestInterceptor);

function responseFulfilledInterceptor(res) {
  if (200 <= res.status && res.status < 300) {
    console.log('work');
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejectedInterceptor(error) {
  console.log('err');
  return error;
}

instance.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor,
);
