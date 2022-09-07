import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "/";

class ApiClient {
  static createInstance() {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return instance;
  }

  static async get(
    url: string,
    callback: (data: AxiosResponse) => void,
    data: object
  ) {
    const instance = this.createInstance();
    return await instance
      .get(url, data)
      .then((response) => callback(response.data))
      .catch((error) => Promise.reject(error));
  }

  /**
   *
   * @param url request url
   * @param successCallback function when request is succeed
   * @param errorCallback function when request is failed
   * @param data request body data
   * @returns
   */
  static async post(
    url: string,
    successCallback: (status: number | undefined, data: any) => void,
    errorCallback: (status: number | undefined, data: any) => void,
    data: object
  ) {
    const instance = this.createInstance();
    return await instance
      .post(url, data)
      .then((response) => successCallback(response.status, response.data))
      .catch((error: AxiosError) =>
        errorCallback(error.response?.status, error.response?.data)
      );
  }
}

export default ApiClient;
