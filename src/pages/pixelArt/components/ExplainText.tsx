
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import pixel_art_loading_image from '../../../images/pixel_art_loading.png'
import pixel_arts_wall from '../../../images/pixel_arts.png'
import { Link } from 'react-router-dom';

const ExplainText = () => {
  return(
    <div>
      <Container sx={{ display: 'flex', justifyContent:'center', textAlign: 'start'}}>
        <Container sx={{flex: 1 }}>
          <Typography variant="h4" sx={{textAlign: 'center'}}>
            Information
          </Typography>
          <Typography sx={{ whiteSpace: 'pre-line'}}>
            A project in VRChat that lets people draw pixel art inside the game. 
          </Typography>
          <br/>
          <Typography sx={{ whiteSpace: 'pre-line'}}>
            The data is stored and loaded from my server
          </Typography>
          </Container>
          <Container sx={{flex: 3}}>
            <img src={pixel_arts_wall} width={'100%'} height={'auto'} alt="pixel arts wall"/>
          </Container>
        </Container>
        <Container sx={{ display: 'flex', justifyContent:'center', textAlign: 'start'}}>
          <Container sx={{flex: 3}}>
            <img src={pixel_art_loading_image} width={'100%'} height={'auto'} alt="pixel arts wall"/>
          </Container>
          <Container sx={{flex: 2}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>Challenges</Typography>
            <Typography>
              Getting data out of VRChat is very limited. You can only use hard-coded URLs so you can't change them at runtime
            </Typography>
            <Typography>
              Because of this sending the pixel art to the server took about 5 minutes
            </Typography>
            <br/>
            <Link to="https://github.com/oikki/PixelArtServer">Learn more on my github page</Link>
          </Container>
        </Container>
      </div>
  )
}

export default ExplainText