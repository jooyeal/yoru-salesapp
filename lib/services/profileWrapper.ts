import ApiClient from "./apiClient";

interface ProfileInfoRequestData {
  userId: any;
  firstname?: string;
  lastname?: string;
  nickname?: string;
  phoneNumber?: string;
  address?: string;
}

interface SignInInfoRequestData {
  userId: any;
  email: string;
}

interface ProfileInfoParameter {
  data: ProfileInfoRequestData;
  successCallback: (status: number | undefined, data: any) => void;
  errorCallback: (status: number | undefined, data: any) => void;
}

interface SignInInfoParameter {
  data: SignInInfoRequestData;
  successCallback: (status: number | undefined, data: any) => void;
  errorCallback: (status: number | undefined, data: any) => void;
}

export const personalInfoUpdateWrapper = ({
  data,
  successCallback,
  errorCallback,
}: ProfileInfoParameter) => {
  ApiClient.put("/api/profile/personal", successCallback, errorCallback, data);
};

export const signinInfoUpdateWrapper = ({
  data,
  successCallback,
  errorCallback,
}: SignInInfoParameter) => {
  ApiClient.put("/api/profile/signin", successCallback, errorCallback, data);
};
