import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import VoxelArtViewer from '../components/VoxelArtViewer';
import { Box, Box as MuiBox, Typography } from '@mui/material';
import { VoxelArt } from '../../../interfaces/interfaces';


const VoxelArtsList = ({voxelArts, voxelArtsToShow} : {voxelArts: VoxelArt[], voxelArtsToShow: number[]}) => {
  return(
    <Container sx={{display: 'flex', textAlign:"center", flexDirection:"column", justifyContent:"center"}}>
      {voxelArtsToShow.map((key: number) => {
        const voxelArt: VoxelArt = voxelArts[key];
        return (
          <Box component="div" key={key} sx={{m: 3}}>
            <Container>
              <Typography variant="h5">{voxelArt.username}</Typography>
              <Typography>Likes: {voxelArt.likes}</Typography>
              <Typography>Creation date: {voxelArt.creationDate}</Typography>
            </Container>
            <Container sx={{pb:5}}>
              <VoxelArtViewer data={voxelArt.data}/>
            </Container>
          </Box>);
      })}
    </Container>
  )
}

export default VoxelArtsList