import React from "react";
import { Box, Grid, TextField, Typography, Button, InputAdornment, IconButton } from "@mui/material";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { useDispatch } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "../../../assets/googleIcon.svg";
import Logo from "../../../assets/logo.svg";
import Image1 from "../../../assets/img1.svg";
import { Link } from "react-router-dom";
import * as authActions from "../../../redux/actions/authActions";
import { auth } from "../../../config/firebase-config";
const SignInPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const onChangeUserData = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //----SIGN IN---------
  const onSubmitUserData = async () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        setIsLoading(false);
        dispatch(authActions.setActiveUser(res.user));
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };
  //----GOOGLE-SIGN-IN--------
  const googleSignIn = () => {
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
              <img style={{ height: "55px" }} src={Logo} alt="logo"></img>
            </Grid>
            <Grid>
              <Typography style={{ fontFamily: "Rosario", fontStyle: "normal", fontWeight: "bolder", fontSize: "20px", lineHeight: "29px", color: "#000000", textAlign: "left" }}>Keep all solved programmes in one place. Comes up with easy and smart management.</Typography>
            </Grid>
            <Grid>
              <img src={Image1} style={{ height: "445px" }} alt="login-screen"></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6} padding={7}>
          <Grid container item direction="column" justifyContent="center" justifyItems={"center"} rowGap={4}>
            <Grid item marginBottom={"3rem"}>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "40px", lineHeight: "56px", color: "#6437FC" }}>Welcome back,</Typography>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "23px", color: "#615C5C" }}>Enjoy our services!</Typography>
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
                type={showPassword ? "text" : "password"}
                value={userData.password}
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
              <Typography textAlign={"right"} style={{ cursor: "pointer", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#6437FC" }}>
                Forget Password?
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={onSubmitUserData} style={{ width: "100%", height: "47px", background: "#6437FC", borderRadius: "35px", color: "white" }}>
                Sign In
              </Button>

              <Typography textAlign={"center"} style={{ marginTop: "6px", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#8D8A8A" }}>
                Don't have an account?{" "}
                <span style={{ cursor: "pointer", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#6437FC" }}>
                  <Link to="/signup">Sign Up</Link>
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

export default SignInPage;
