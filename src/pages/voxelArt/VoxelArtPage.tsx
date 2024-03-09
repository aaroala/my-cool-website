import { Canvas } from 'react-three-fiber';
import Container from '@mui/material/Container';
import { Vector3 } from 'three';
import { useEffect, useRef, useState } from 'react';
import { VoxelArt } from '../../interfaces/interfaces';
import Button from '@mui/material/Button';
import VoxelArtViewer from './components/VoxelArtViewer';
import { Box, Box as MuiBox, Typography } from '@mui/material';
import PageSelectionButtons from './components/PageSelectButtons';
import voxel_arts_top from '../../images/voxel_arts_top.png'
import voxel_arts_ground from '../../images/voxel_arts_ground.png'

const VoxelArtPage = () => {

  const [voxelArts, setVoxelArts] = useState(Object)
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollToComponentRef = useRef(document.createElement("div"))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://getplots-4rwzicohjq-uc.a.run.app/');
        const data = await response.json();
        console.log("got the data");
        console.log(typeof(data))
        setVoxelArts(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const PageButtonPressBehaviour = (e: any) => {
    setCurrentIndex(parseInt(e.target.value))
    scrollToComponentRef.current.scrollIntoView({behavior: "smooth"})
  }


  const VoxelArtsList = () => {
    return(
      <Container sx={{display: 'flex', textAlign:"center", flexDirection:"column", justifyContent:"center"}}>
        {voxelArtsToShow.map((key) => {
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

  
  const voxelArtsPerPage = 5;
  const voxelArtKeys = Object.keys(voxelArts);
  const voxelArtsToShow = voxelArtKeys.slice(currentIndex, currentIndex + voxelArtsPerPage);

  

  return (
    <div style={{ textAlign:"center"}}>
      <Typography py={4} variant="h2">Voxel builder project</Typography>
      <Container sx={{ display: 'flex', justifyContent:'center', textAlign: 'start'}}>
        <Container sx={{flex: 1 }}>
          <Typography variant="h4" sx={{textAlign: 'center'}}>
            Information
          </Typography>
          <Typography sx={{ whiteSpace: 'pre-line'}}>
            A collaboratory project in VRChat that let's people create voxels. 
          </Typography>
          <br/>
          <Typography sx={{ whiteSpace: 'pre-line'}}>
            I was in charge of creating the server/database functions
          </Typography>
          <br/>
          <Typography sx={{ whiteSpace: 'pre-line'}}>
            Made a horrible mistake trying to create it in plain javascript
          </Typography>
          </Container>
          <Container sx={{flex: 3}}>
            <img src={voxel_arts_ground} width={'100%'} height={'auto'} alt="pixel arts wall"/>
          </Container>
        </Container>
        <Container sx={{ display: 'flex', justifyContent:'center', textAlign: 'start'}}>
          <Container sx={{flex: 3}}>
            <img src={voxel_arts_top} width={'100%'} height={'auto'} alt="pixel arts wall"/>
          </Container>
          <Container sx={{flex: 2}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>Testing the limits</Typography>
            <Typography>
              Each plot has a size of 25x25x25 which is about the maximum amount of voxels you can send in one URL.
            </Typography>
            <Typography>
              Trying to optimize the server functions was a interesting task.
            </Typography>
          </Container>
        </Container>
      <Box component="div" py={2} mt={5} sx={{bgcolor: '#888888'}}>
        <Typography variant="h3"> Created voxel arts below</Typography>
        <Typography>Using three.js for visualization</Typography>
      </Box>
      <br/>
      <div ref={scrollToComponentRef}></div>
      <PageSelectionButtons voxelArtKeys={voxelArtKeys} voxelArtsPerPage={voxelArtsPerPage} currentIndex={currentIndex} PageButtonPressBehaviour={PageButtonPressBehaviour}/>
      <VoxelArtsList />
      <PageSelectionButtons voxelArtKeys={voxelArtKeys} voxelArtsPerPage={voxelArtsPerPage} currentIndex={currentIndex} PageButtonPressBehaviour={PageButtonPressBehaviour}/>
    </div>
  );
};


export default VoxelArtPage;
