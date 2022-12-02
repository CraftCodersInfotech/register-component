import { createContext, useCallback, useMemo, useState } from "react";
export interface IRegisterContext {
  registerUser: (
    fname: string,
    lname: string,
    password: string,
    email: string
  ) => void;
  userData: any;
}
const RegisterContextDefaultValue = {
  registerUser: () => undefined,
  userData: null,
};
export const RegisterContext = createContext<IRegisterContext>(
  RegisterContextDefaultValue
);
export const useRegisterStore = () => {
  const [_userData, setUserData] = useState<any>(null);
  const registerUser = useCallback(
    (fname: string, lname: string, password: string, email: string) => {
      setUserData({
        firstname: fname,
        lastname: lname,
        email,
        password,
      });
    },
    []
  );
  return useMemo(
    () => ({
      registerUser,
      userData: _userData,
    }),
    [_userData]
  );
};
