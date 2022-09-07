import ApiClient from "./apiClient";

type SignUpRequestData = {
  email: string;
  password: string;
  username: string;
};

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
