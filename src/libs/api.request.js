import axios from "axios";

import config from "@/config";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.headers.post['Authorization'] = ''
axios.defaults.timeout = 30000; // 30s
axios.defaults.withCredentials = true;

class HttpClient {
  config() {
    return {
      baseURL: baseUrl
    };
  }
  interceptors(instance, url) {}

  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance;
  }
}

const request = new HttpClient();

export default request;
