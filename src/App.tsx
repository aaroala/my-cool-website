import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PixelArtPage from "./pages/pixelArt/PixelArtPage";
import './App.css';
import VoxelArtPage from './pages/voxelArt/VoxelArtPage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import BlogPage from './pages/blog/BlogPage';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import Footer from './components/Footer';
import { useThemeContext } from "./theme/ThemeContextProvider";
import { alpha } from '@mui/material'



function App() {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pixel-arts" element={<PixelArtPage />} />
            <Route path="/voxel-arts" element={<VoxelArtPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
        <Footer />
    </ThemeProvider>
    
  );



}

export default App;
