import { createContext } from "react";

const defaultValue = {
  authUser: null,
  isAuth: false,
  onLogin: () => {},
  onLogout: () => {},
};

export default createContext(defaultValue);
