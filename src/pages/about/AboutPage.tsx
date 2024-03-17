import { Container, Paper, Typography } from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import PublicIcon from '@mui/icons-material/Public';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CropDinIcon from '@mui/icons-material/CropDin';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import ConstructionIcon from '@mui/icons-material/Construction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EditIcon from '@mui/icons-material/Edit';

const AboutPage = () => {
  return(
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent:'center'}}>
        <Paper elevation={10} sx={{m: 5, p:5, mb: 10 }}>
          <Typography variant="h4">About me</Typography>
          <Typography>I like to do various projects.</Typography> 
          <Typography>Creating games in Unity,</Typography> 
          <Typography>3D modeling in Blender,</Typography>
          <Typography>Discord bots/APis in Python</Typography>
          <Typography>and trying to combine everything I have learned together.</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5, display: 'flex', alignItems: 'center'}}>
            <ConstructionIcon sx={{fontSize: 40, mr:2}}/>
            <Typography variant="h4">What is my toolset</Typography>
            <ConstructionIcon sx={{fontSize: 40, ml:2}}/>
        </Paper>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <TerminalIcon />
          <Typography variant="h5">Languages</Typography>
          <Typography>Python, C#, Java, Javascript, Typescript</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <FilterFramesIcon />
          <Typography variant="h5">Frameworks/Libraries</Typography>
          <Typography>React, React native, PyQt5, Tkinter</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <StorageIcon />
          <Typography variant="h5">Databases</Typography>
          <Typography>PostgreSQL GraphQL, MySQL, SQLAlchemy</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <PublicIcon />
          <Typography variant="h5">API's</Typography>
          <Typography>Flask, Express, Firebase cloud functions</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <SportsEsportsIcon />
          <Typography variant="h5">Games</Typography>
          <Typography>Unity, Blender, Asesprite, Bfxr</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <EditIcon />
          <Typography variant="h5">Designing</Typography>
          <Typography>Figma, Paint, Notepad</Typography>
        </Paper>
        <Paper elevation={10} sx={{m: 5, p:5}}>
          <WbTwilightIcon />
          <Typography variant="h5">And much more</Typography>
          <Typography>R, PowerBI, Github, ChatGTP...</Typography>
        </Paper>
      </div>
    </div>
  )
}



export default AboutPage;