import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3000";

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
    successCallback: (status: number | undefined, data: any) => void,
    errorCallback: (status: number | undefined, data: any) => void,
    data: object
  ) {
    const instance = this.createInstance();
    return await instance
      .get(url, { params: data })
      .then((response) => successCallback(response.status, response.data))
      .catch((error: AxiosError) =>
        errorCallback(error.response?.status, error.response?.data)
      );
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

  static async put(
    url: string,
    successCallback: (status: number | undefined, data: any) => void,
    errorCallback: (status: number | undefined, data: any) => void,
    data: object
  ) {
    const instance = this.createInstance();
    return await instance
      .put(url, data)
      .then((response) => successCallback(response.status, response.data))
      .catch((error: AxiosError) =>
        errorCallback(error.response?.status, error.response?.data)
      );
  }
}

export default ApiClient;
