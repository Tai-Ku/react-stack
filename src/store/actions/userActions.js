import actionTypes from "./actionTypes";

export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});
export const userLoginSucess = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCESS,
  userInfo: userInfo,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});
export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});
