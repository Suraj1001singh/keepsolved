import React from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { Box, Grid, TextField, Typography, Button, InputAdornment, IconButton } from "@mui/material";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "../../../assets/googleIcon.svg";
import Logo from "../../../assets/logo.svg";
import Image1 from "../../../assets/img1.svg";
import { useDispatch } from "react-redux";
import * as authActions from "../../../redux/actions/authActions";
import { auth } from "../../../config/firebase-config";
import { Link } from "react-router-dom";

// -------------------------------------------IMPORTS--------------------------------------------------------
const SignUpPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //----SIGN UP---------
  const onSubmitUserData = async () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userData.username,
        });
        setIsLoading(false);
        dispatch(authActions.setActiveUser(auth.currentUser));
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };
  //----GOOGLE-SIGN-IN--------
  const googleSignIn = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsLoading(false);
        dispatch(authActions.setActiveUser(res.user));
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };
  return (
    <Box style={{ maxWidth: "1200px", margin: "auto" }} alignItems="center">
      <Grid style={{ height: "100vh" }} direction="row" container>
        <Grid container item xs={6}>
          <Grid container item direction="column" justifyContent="center" justifyItems={"center"} style={{ padding: "1rem 7rem 2rem 0" }} rowGap={4}>
            <Grid>
              <img style={{ height: "55px" }} src={Logo} aria-hidden alt="logo"></img>
            </Grid>
            <Grid>
              <Typography style={{ fontFamily: "Rosario", fontStyle: "normal", fontWeight: "bolder", fontSize: "20px", lineHeight: "29px", color: "#000000", textAlign: "left" }}>Keep all solved programmes in one place. Comes up with easy and smart management.</Typography>
            </Grid>
            <Grid>
              <img src={Image1} style={{ height: "445px" }} aria-hidden alt="login-screen"></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6} padding={7}>
          <Grid container item direction="column" justifyContent="center" justifyItems={"center"} rowGap={4}>
            <Grid item marginBottom={"3rem"}>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "40px", lineHeight: "56px", color: "#6437FC" }}>Welcome To,</Typography>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "23px", color: "#615C5C" }}>Register with us !</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                name="username"
                value={userData.username}
                onChange={(e) => onChangeUserData(e)}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonPinRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                name="email"
                value={userData.email}
                onChange={(e) => onChangeUserData(e)}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MarkEmailUnreadRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                value={userData.password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => onChangeUserData(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item>
              <Button onClick={onSubmitUserData} style={{ width: "100%", height: "47px", background: "#6437FC", borderRadius: "35px", color: "white" }}>
                Sign Up
              </Button>

              <Typography textAlign={"center"} style={{ marginTop: "6px", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#8D8A8A" }}>
                Already have an account?{" "}
                <span style={{ cursor: "pointer", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#6437FC" }}>
                  <Link to="/">Sign In</Link>
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography textAlign={"center"}>Or</Typography>
            </Grid>
            <Grid item textAlign={"center"}>
              <Button onClick={googleSignIn} style={{ textTransform: "none", background: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "35px", padding: "0 4rem", color: "black" }}>
                <img style={{ margin: "6px" }} src={GoogleIcon} alt="google"></img>
                Sign In with Google
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
