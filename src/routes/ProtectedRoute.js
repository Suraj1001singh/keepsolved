import React from "react";
// import { Backdrop, CircularProgress } from "@mui/material";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
//---------------------------IMPORTS---------------------------

const ProtectedRoute = (props) => {
  const location = useLocation();
  const { path } = props;
  const { currentUser } = useSelector((state) => state.authReducer);
  if (path === "/" || path === "/signup" || path === "/forgot-password" || path === "/reset-password") {
    return currentUser ? <Redirect to={location.state?.from ?? "/homepage"} /> : <Route {...props} />;
  }
  return currentUser ? (
    <Route {...props}></Route>
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: path },
      }}
    ></Redirect>
  );
  //   if (email == null ) {
  //     console.log("i am here");
  //     return (
  //       <Backdrop open={true} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  //         <CircularProgress color="inherit" />
  //       </Backdrop>
  //     );
  //   } else
};

export default ProtectedRoute;
