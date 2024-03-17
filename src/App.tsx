import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PixelArtPage from "./pages/pixelArt/PixelArtPage";
import './App.css';
import VoxelArtPage from './pages/voxelArt/VoxelArtPage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import BlogPage from './pages/blog/SingleBlogPage';
import BlogsPage from './pages/blog/BlogsPage';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import Footer from './components/Footer';
import { useThemeContext } from "./theme/ThemeContextProvider";
import { alpha } from '@mui/material'
import AboutPage from './pages/about/AboutPage';



function App() {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
        <div style={{minHeight: '100vh'}}>
          <CssBaseline />
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pixel-arts" element={<PixelArtPage />} />
              <Route path="/voxel-arts" element={<VoxelArtPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </Router>
        </div>
        <Footer />
    </ThemeProvider>
    
  );



}

export default App;
