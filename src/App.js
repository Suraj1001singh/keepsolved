import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignInPage from "./components/pages/signInPage/SignInPage";
import SignUpPage from "./components/pages/signUpPage/SignUpPage";
import OtpVerfication from "./components/pages/otpVerfication/OtpVerfication";
import HomePage from "./components/pages/homePage/HomePage";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import * as authAction from "./redux/actions/authActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authAction.enableAuthState());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={SignInPage}></ProtectedRoute>
          <ProtectedRoute exact path="/homepage" component={HomePage}></ProtectedRoute>
          <ProtectedRoute exact path="/otpverfication" component={OtpVerfication}></ProtectedRoute>
          <ProtectedRoute exact path="/signup" component={SignUpPage}></ProtectedRoute>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
