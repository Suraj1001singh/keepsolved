import {  takeEvery } from "redux-saga/effects";
import * as types from "../../actions/authActions/types";
import * as authAction from "../../actions/authActions";
import store from "../../store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase-config";


function* getAuthState() {
  yield onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(authAction.setActiveUser(user));
    }
  });
}

export function* getAuthStateSaga() {
  yield takeEvery(types.ENABLE_AUTH_LISTNER, getAuthState);
}

// function* createNewUser({ userData }) {
//   try {
//     const userCredential = yield createUserWithEmailAndPassword(auth, userData.email, userData.password);
//     if (userCredential) {
//       const { email, uid } = userCredential.user;
//       const db = getDatabase();
//       const userRef = ref(db, `restricted/${uid}/profile/`);

//       yield set(userRef, {
//         name: userData.username,
//         email: email,
//         uid: uid,
//       });
//       yield onValue(userRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           sessionStorage.setItem("Auth Token", userCredential._tokenResponse.refreshToken);
//           store.dispatch(authAction.setActiveUser(data));
//           window.location = "/homepage";
//         }
//       });
//     }
//   } catch (e) {
//     alert(e.message);
//   }
// }
