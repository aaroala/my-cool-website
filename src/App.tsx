import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PixelArtPage from "./pages/pixelArt/PixelArtPage";
import './App.css';
import VoxelArtPage from './pages/voxelArt/VoxelArtPage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Switch } from '@mui/material';
import { useState } from 'react';
import BlogPage from './pages/blog/BlogPage';
import HomePage from './pages/home/HomePage';


function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', 
      primary: {
        main: '#666666',
      },
      secondary: {
        main: '#131052',
      },
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar toggleDarkTheme={toggleDarkTheme} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pixel-arts" element={<PixelArtPage />} />
          <Route path="/voxel-arts" element={<VoxelArtPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  );



}

export default App;
