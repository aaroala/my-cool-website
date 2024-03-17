// @ts-nocheck
import { Container as MuiContainer, Fade, Slide, Typography, Container } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import pixel_arts_wall from '../../images/pixel_arts.png'
import voxel_arts_ground from '../../images/voxel_arts_ground.png'
import programming_photo from "../../images/programming_photo.jpg"
import question_mark from "../../images/question_mark.jpg"
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import options from "./nasa";
import { loadSlim } from "@tsparticles/slim";
import { Link as MuiLink} from "@mui/material";
import { Link } from "react-router-dom";



const pageLinks = [
  {text: 'Pixel Art Project', to: 'pixel-arts'},
  {text: 'Voxel Art Project', to: 'voxel-arts'},
  {text: 'Blogs', to: 'blogs'},
  {text: 'About', to: 'about'},
];


const HomePage = () => {
  const [ init, setInit ] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

const particlesLoaded = (container) => {
    console.log(container);
};

  const welcomeText = "Welcome!"
  const characters = Array.from(welcomeText);


  const coolTextAnimation = characters.map((char: String, index: number) => (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit
      timeout={1000 + 100*index}>
        <Typography variant="h1">{char}</Typography>
    </Slide>
  ));


  return (
    <div>
      { init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options}/>}
      <MuiContainer component={"div"} sx={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center', mb:10}}>
        <Box component={"div"} sx={{ display: 'flex', mt: 15}}>
          {coolTextAnimation}
        </Box>
      </MuiContainer>
      <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', flexDirection: 'row', }}>
        <div style={{margin: 20}}>
          <Fade in={true} 
            style={{ transitionDelay: `${1500}ms` }}
            {...({ timeout: 3000 })}>
            <div>
              <Typography variant="h5">This website is made using</Typography>
              <Typography>React</Typography>
              <Typography>Typescript</Typography>
              <Typography>Firebase (athentication/backend)</Typography>
              <Typography>Material UI (styling)</Typography>
              <Typography>Sanity (blogs)</Typography>
              <Typography>Three.js (3D visualization)</Typography>
              <Typography>Tsparticles (This page particles)</Typography>
            </div>
          </Fade>
        </div>
        <div style={{margin: 20}}>
          <Fade in={true} 
            style={{ transitionDelay: `${2000}ms` }}
            {...({ timeout: 3000 })}>
              <div>
                <Typography variant="h5">Check this website's source code on 
                <MuiLink component="button" 
                  color="inherit" 
                  onClick={() => window.open(`https://github.com/aaroala/my-cool-website`, '_blank')}> 
                    Github!
                  </MuiLink>
                </Typography>
              </div>
          </Fade>
        </div>
        <div style={{margin: 20}}>
          <Fade in={true} 
            style={{ transitionDelay: `${2500}ms`, margin:10}}
            {...({ timeout: 3000 })}>
            <div>
              <Typography variant="h5">And my projects below</Typography>
            </div>
          </Fade>
        </div>
      </div>
      <MuiContainer sx={{mt: 20}} />
      <Fade in={true} 
            style={{ transitionDelay: `${3500}ms` }}
            {...({ timeout: 3000 })}>
          <div>
            <Typography variant="h3" sx={{textAlign: 'center'}}>Check out some of my projects!</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row'}}>
              <div style={{margin: 5}}>
                <Link to={"/pixel-arts"} style={{ textDecoration: 'none' }}>
                  <Paper elevation={10} sx={{p:3}}>
                    <Typography variant="h5">Pixel Art Project</Typography>
                    <img src={pixel_arts_wall} style={{width: "100%", height: "auto", maxHeight: "200px"}}alt="pixel arts wall"/>
                  </Paper>
                </Link>
              </div>
              <div style={{margin: 5}}>
              <Link to={"/voxel-arts"} style={{ textDecoration: 'none' }}>
                <Paper elevation={10} sx={{p:3}}>
                  <Typography variant="h5">Voxel Art Project</Typography>
                  <img src={voxel_arts_ground} style={{width: "100%", height: "auto", maxHeight: "200px"}}alt="pixel arts wall"/>
                </Paper>
              </Link>
              </div>
              <div style={{margin: 5}}>
                <Link to={"/blogs"} style={{ textDecoration: 'none' }}>
                  <Paper elevation={10} sx={{p:3}}>
                    <Typography variant="h5">My blog posts</Typography>
                    <img src={programming_photo} style={{width: "100%", height: "auto", maxHeight: "200px"}}alt="pixel arts wall"/>
                  </Paper>
                </Link>
              </div>
            </Box>
          </div>
      </Fade>
      <Fade in={true} 
            style={{ transitionDelay: `${4000}ms` }}
            {...({ timeout: 3000 })}>
          <div style={{marginTop: "50px"}}>
            <Typography variant="h3" sx={{textAlign: 'center'}}>And here's something about me</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row'}}>
              <div style={{margin: 5}}>
                <Link to={"/about"} style={{ textDecoration: 'none' }}>
                  <Paper elevation={10} sx={{p:3}}>
                    <Typography variant="h5">About me</Typography>
                    <img src={question_mark} style={{width: "100%", height: "auto", maxHeight: "200px"}}alt="pixel arts wall"/>
                  </Paper>
                </Link>
              </div>
            </Box>
          </div>
      </Fade>
      <MuiContainer sx={{mt: 10}} />
    </div>

)}

export default HomePage;