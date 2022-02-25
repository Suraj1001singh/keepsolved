import createReducer from "../../../utils/createReducer";
import * as authTypes from "../../actions/authActions/types";

const activeUserData = {
  loading: false,
  currentUser: null,
};

export const authReducer = createReducer(activeUserData, {
  [authTypes.SET_ACTIVE_USER](state, action) {
    return {
      ...state,
      currentUser: action?.userData,
      loading: false,
    };
  },

  [authTypes.SET_USER_LOGOUT_STATE](state) {
    return {
      ...state,
      currentUser: null,
      loading: false,
    };
  },
});
