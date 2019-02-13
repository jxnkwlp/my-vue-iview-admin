import axios from "axios";
import qs from "qs";
import {
  getAccessToken
} from "@/libs/util";

import config from "@/config";
const baseUrl =
  process.env.NODE_ENV === "development" ?
  config.baseUrl.dev :
  config.baseUrl.pro;

axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
//axios.defaults.headers["Authorization"] = getAccessToken();
axios.defaults.timeout = 30000; // 30s
axios.defaults.withCredentials = true;

class HttpRequest {
  config() {
    return {
      baseURL: baseUrl,
      headers: {
        //
        Authorization: "Bearer " + getAccessToken()
      }
    };
  }
  interceptors(instance, url) {
    // instance.interceptors.request.use(config => {
    //   // 添加全局的loading...
    //   if (!Object.keys(this.queue).length) {
    //     // Spin.show() // 不建议开启，因为界面不友好
    //   }
    //   this.queue[url] = true
    //   return config
    // }, error => {
    //   return Promise.reject(error)
    // })
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        const {
          data,
          status
        } = res;
        return {
          data,
          status
        };
      },
      error => {
        // let errorInfo = error.response;
        // if (!errorInfo) {
        //   const {
        //     request: { statusText, status },
        //     config
        //   } = JSON.parse(JSON.stringify(error));
        //   errorInfo = {
        //     statusText,
        //     status,
        //     request: {
        //       responseURL: config.url
        //     }
        //   };
        // }
        // addErrorLog(errorInfo);
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.config(), options);
    if (options.method == "post") {
      options.data = qs.stringify(options.data);
    }
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

const http = new HttpRequest();

export default http;