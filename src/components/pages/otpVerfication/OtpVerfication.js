import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import Logo from "../../../assets/logo.svg";
import Image1 from "../../../assets/otp-security.svg";

const LoginPage = () => {
  return (
    <Box style={{ maxWidth: "1200px", margin: "auto" }} alignItems="center">
      <Grid style={{ height: "100vh" }} direction="row" container>
        <Grid container item xs={6}>
          <Grid container item direction="column" justifyContent="center" justifyItems={"center"} style={{ padding: "1rem 7rem 2rem 0" }} rowGap={4}>
            <Grid>
              <img style={{ height: "55px" }} src={Logo} aria-hidden alt="logo"></img>
            </Grid>

            <Grid>
              <img src={Image1} style={{ height: "550px" }} aria-hidden alt="login=screen"></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6} style={{ padding: "2rem 7rem" }}>
          <Grid container item direction="column" justifyContent={"center"} rowGap={5}>
            <Grid item marginBottom={"1rem"}>
              <Typography style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: "40px", color: "#000000", textAlign: "center", marginBottom: "1rem" }}>OTP Verification</Typography>
              <Typography style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: "20px", textAlign: "center", color: "#615C5C" }}>
                An 6 digit code has been sent to your
                <br /> email id{" "}
              </Typography>
            </Grid>

            <Grid item justifyContent={"center"} display={"flex"} alignItems={"center"}>
              <TextField textAlign={"center"} variant="standard"></TextField>
            </Grid>
            <Grid>
              <Typography textAlign={"center"} style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", lineHeight: "21px", color: "#615C5C", marginTop: "1rem" }}>
                Don't recieve the OTP? <span style={{ cursor: "pointer", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", color: "#6437FC" }}>RESEND OTP</span>
              </Typography>
            </Grid>
            <Grid item>
              <Button style={{ width: "100%", height: "47px", background: "#6437FC", borderRadius: "35px", color: "white" }}>Submit and Proceed</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
