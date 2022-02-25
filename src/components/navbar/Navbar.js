import React from "react";
import "./style.css";
import Logo from "../../assets/logo.svg";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import * as authAction from "../../redux/actions/authActions";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const onhandelSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(authAction.setUserLogoutState());
      })
      .catch((err) => alert(err.message));
  };
  return (
    <nav style={{ padding: "0 2rem" }}>
      <div className="navbar">
        <div className="logo-div">
          <img className="logo-img" src={Logo} alt="logo"></img>
        </div>
        <div className="menu-div">
          <ul className="menu-list">
            <li className="menu-item active-item">
              <Link>Problem Solved</Link>
            </li>
            <li className="menu-item ">
              <Link>Pending Problems</Link>
            </li>
            <li className="menu-item button" onClick={onhandelSignOut}>
              <Link to="/">Sign out</Link>
            </li>
          </ul>
        </div>
        <div className="profile-div">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
