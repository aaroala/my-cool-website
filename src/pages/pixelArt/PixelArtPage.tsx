
import { useEffect, useState } from 'react';
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
        const pixelArtUrl = process.env.REACT_APP_PIXEL_ART_GET_URL
        const response = await fetch(pixelArtUrl ? pixelArtUrl : "");
        const data = await response.json();
        console.log(data); 
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
      {pixelArts.length === 0 ?
      <Typography variant='h4' my={2}>Loading...</Typography>
      :
      <>
        <Typography my={2}>Showing ALL {pixelArts.length}/{pixelArts.length}</Typography>
        <PixelArtList pixelArts={pixelArts}/>
      </>
      }

    </div>
  );

}

export default PixelArtPage;