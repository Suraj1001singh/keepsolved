import * as authReducer from "./authReducers";
import * as dbReducer from "./dbReducers";

export default Object.assign(authReducer, dbReducer);
