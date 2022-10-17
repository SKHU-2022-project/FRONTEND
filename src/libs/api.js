import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://skhuzhuanye.herokuapp.com/',
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
