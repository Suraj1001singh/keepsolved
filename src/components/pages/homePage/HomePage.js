import React from "react";
import Navbar from "../../navbar/Navbar";
import { IconButton, Box, InputBase, Grid, Select, MenuItem, InputLabel, Typography, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TopicLink from "../../cutomizedLinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f4efff",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const HomePage = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <section style={{ padding: "2rem" }}>
        {/* searching , filter section */}
        <Box style={{ maxWidth: "1200px", margin: "auto", marginTop: "2rem" }}>
          <Grid container xs={12} item direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={4} alignItems={"left"}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
              </Search>
            </Grid>
            <Grid xs={7} container item direction={"row"}>
              <TopicLink topic={"Recursion"} />
              <TopicLink topic={"Dynamic Programming"} />
              <TopicLink topic={"Arrays"} />
              <TopicLink topic={"Strings"} />
              <TopicLink topic={"Bit Magic"} />
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select variant={"standard"} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ background: "#FFFFFF", boxShadow: "-10px 15px 10px #F9F9F9, 10px 15px 10px #F9F9F9", borderRadius: "25px", maxWidth: "1200px", height: "fit-content", margin: "auto", padding: "2rem 3rem", minHeight: "450px" }}>
          <Grid container>
            {/* item */}
            <Grid style={{ display: "grid", gridTemplateColumns: "35px 1fr 1fr 1fr 70px", boxShadow: "0px 1px 0px #E5E5E5", marginBottom: "7px" }} justifyContent={"center"} alignItems={"center"} container item>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#000000" }}>1.</Typography>

              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#000000", marginLeft: "1rem" }}>Maximum sum problem</Typography>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", lineHeight: "21px", textAlign: "center", color: "#000000" }}>Recursion, Arrays</Typography>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", textAlign: "center", color: "#FD3326" }}>Hard</Typography>

              <Button style={{ width: "84px", height: "44px", background: "#F4EFFF", borderRadius: "26px" }}>
                <ArrowRightAltIcon />
              </Button>
            </Grid>
            <Grid style={{ display: "grid", gridTemplateColumns: "35px 1fr 1fr 1fr 70px", boxShadow: "0px 1px 0px #E5E5E5", marginBottom: "7px" }} justifyContent={"center"} alignItems={"center"} container item>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#000000" }}>2.</Typography>

              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#000000", marginLeft: "1rem" }}>Maximum sum problem</Typography>
              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", lineHeight: "21px", textAlign: "center", color: "#000000" }}>Recursion, Arrays</Typography>

              <Typography style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", lineHeight: "21px", textAlign: "center", color: "#FD3326" }}>Hard</Typography>

              <Button style={{ width: "84px", height: "44px", background: "#F4EFFF", borderRadius: "26px" }}>
                <ArrowRightAltIcon color={"#6437fc"} />
              </Button>
            </Grid>
          </Grid>
          <IconButton style={{ color: "#6437fc", position: "fixed", bottom: "3rem", margin: "auto", left: "0", right: "0" }}>
            <AddCircleIcon style={{ fontSize: "4rem" }} />
          </IconButton>
        </Box>
      </section>
    </>
  );
};

export default HomePage;
