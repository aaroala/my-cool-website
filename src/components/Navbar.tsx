import React from "react";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from "@mui/material/Menu";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from "@mui/material";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from "../theme/ThemeContextProvider";


import { useNavigate } from "react-router-dom";


const pages = [
  {text: 'Home', to: ''},
  {text: 'Pixle Art Project', to: 'pixel-arts'},
  {text: 'Voxel Art Project', to: 'voxel-arts'},
  {text: 'Blogs', to: 'blogs'},

];

function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { mode, toggleColorMode } = useThemeContext();

  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={{position: "static"}}>
        <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '5'}}>
          <Typography variant="h6" sx={{pl: 0}}>Website</Typography>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
            {pages.map((page, index) => (
              <Button onClick={() => {navigate(`/${page.to}`)}}>
                <Typography>{page.text}</Typography>
              </Button>
            ))}
          </Container>
          <IconButton onClick={toggleColorMode}>
            {mode === "dark" ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>

          {!user ? 
          (
            <Button
            onClick={() => {navigate("/login")}}>
            <Typography>Login</Typography>
          </Button>
          )
          : 
          (<Typography>Logged in as: {user?.displayName}</Typography>)
          }
        </Toolbar>
    </div>
  );
}
export default Navbar;
