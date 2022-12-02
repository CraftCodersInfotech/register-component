import { RegisterContext, useRegisterStore } from "../Context/Register-context";
import * as React from "react";
export interface RegisterProviderProps {
  children: React.ReactNode;
}
const RegisterProvider: React.FC<RegisterProviderProps> = (props) => {
  const { children } = props;
  const userData = useRegisterStore();
  return (
    <RegisterContext.Provider value={userData}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
