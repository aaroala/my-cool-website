
import React, { useEffect, useState } from 'react';
import PixelArtList from './components/PixelArtList';
import Typography from '@mui/material/Typography';
import { PixelArt } from '../../interfaces/interfaces';
import { Box } from '@mui/material';
import ExplainText from './components/ExplainText';

const PixelArtPage = () => {
  const [pixelArts, setPixelArts] = useState<PixelArt[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5001/project-website-93450/us-central1/getPixelArts');
        const data = await response.json();
        console.log(data); // You can do something with the fetched data here
        setPixelArts(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className="App">
      <Typography py={4} variant="h2">Pixel Art Project</Typography>
      <ExplainText />
      <Box component="div" py={2} mt={5} bgcolor='secondary.dark' boxShadow={5} mb={2}>
        <Typography variant="h3"> Drawn pixel arts so far</Typography>
        <Typography>Downloaded from the server just for you :) (Newer ones might not have been moderated yet)</Typography>
      </Box>
      <Typography>Note: dark mode might affect the images below</Typography>
      <Typography my={2}>Showing ALL {pixelArts.length}/{pixelArts.length}</Typography>
      <PixelArtList pixelArts={pixelArts}/>
    </div>
  );

}

export default PixelArtPage;