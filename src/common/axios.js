var axios = require('axios');
var $loading = document.querySelector(".global-loading");
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    $loading.style.display = "block"
    return config;
  }, function (error) {
    $loading.style.display = "none"
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    $loading.style.display = "none"
    return response;
  }, function (error) {
    $loading.style.display = "none"
    // Do something with response error
    return Promise.reject(error);
  });

module.exports = axios
