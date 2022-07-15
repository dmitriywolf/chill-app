import { useContext } from "react";
import AuthContext from "context/auth/auth.context";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw Error("useAuthContext must be used within a AuthProvider");
  }
  return authContext;
};
