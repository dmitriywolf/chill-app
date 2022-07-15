import AuthContext from "context/auth/auth.context";
import { useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { storage } from "utils";
import { PATHS } from "constants/constants";
import { getProfile } from "services/api";
import { authReducer, actionTypes } from "./auth.reducer";

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, {
    authUser: null,
    isAuth: false,
  });

  const handleLogin = async (token, user) => {
    storage.set("token", token);
    dispatch({ type: actionTypes.SUCCESS_AUTH, user });
    navigate(PATHS.home);
  };

  const handleLogout = () => {
    storage.remove("token");
    dispatch({ type: actionTypes.LOGOUT });
    navigate(PATHS.login);
  };

  const loadData = async () => {
    const tokenData = storage.get("token");

    try {
      if (tokenData) {
        const { data } = await getProfile();
        storage.set("token", tokenData);
        dispatch({ type: actionTypes.SUCCESS_AUTH, user: data });
      }
    } catch {
      storage.remove("token");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authData = {
    authUser: state.user,
    isAuth: state.isAuth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
