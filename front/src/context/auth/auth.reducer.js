export const actionTypes = {
  SUCCESS_AUTH: "SUCCESS_AUTH",
  LOGOUT: "LOGOUT",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_AUTH: {
      return {
        ...state,
        isAuth: true,
        authUser: action.user,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
