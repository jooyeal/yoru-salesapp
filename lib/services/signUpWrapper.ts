import ApiClient from "./apiClient";

export interface SignUpRequestData {
  email: string;
  password: string;
  nickname: string;
  firstname: string;
  lastname: string;
}

interface SignUpParameter {
  data: SignUpRequestData;
  successCallback: (status: number | undefined, data: any) => void;
  errorCallback: (status: number | undefined, data: any) => void;
}

export const signUpWrapper = ({
  data,
  successCallback,
  errorCallback,
}: SignUpParameter) => {
  ApiClient.post("/api/auth/signup", successCallback, errorCallback, data);
};
