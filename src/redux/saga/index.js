import { all } from "redux-saga/effects";
import { getAuthStateSaga } from "./authSaga";
export default function* watch() {
  yield all([getAuthStateSaga()]);
}
