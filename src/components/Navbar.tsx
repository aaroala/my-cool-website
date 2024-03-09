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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


import { useNavigate } from "react-router-dom";


function Navbar({ toggleDarkTheme, toggleDarkMode } : { toggleDarkTheme : Function, toggleDarkMode : boolean}) {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
        <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography sx={{pl: 0}}>LOGO</Typography>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Button
              onClick={() => {navigate("/")}}
              sx={{ color: 'white', }}>
              Home
            </Button>
            <Button
              onClick={() => {navigate("/pixel-arts")}}
              sx={{ color: 'white', display: 'block' }}>
              Pixel Art Project
            </Button>
            <Button
              onClick={() => {navigate("/voxel-arts")}}
              sx={{color: 'white',}}>
              Voxel Art Project
            </Button>
            <Button
              onClick={() => {navigate("/blogs")}}
              sx={{color: 'white',}}>
              Blog
            </Button>
          </Container>
          <Button sx={{ color: 'white'}} onClick={() => toggleDarkTheme()}>
            {toggleDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}
          </Button>
        </Toolbar>
    </AppBar>
  );
}
export default Navbar;
