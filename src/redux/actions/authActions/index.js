import * as types from "./types";

export function enableAuthState() {
  return {
    type: types.ENABLE_AUTH_LISTNER,
  };
}
export function setActiveUser(userData) {
  return {
    type: types.SET_ACTIVE_USER,
    userData,
  };
}
export function setUserLogoutState() {
  return {
    type: types.SET_USER_LOGOUT_STATE,
  };
}
