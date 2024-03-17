import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Box, Typography, IconButton } from "@mui/material"

const Footer = () => {

  const goToWebsite = (url: String) => {
    window.open(`${url}`, '_blank');
  };


  return(
    <Box component={"div"} bgcolor='secondary.dark' sx={{display: 'flex', justifyContent: 'space-between', boxShadow: 10}} p={4}>
      <Typography>Copyright @oikki</Typography>
      <div style={{float:'right'}}>
        <IconButton onClick={() => goToWebsite("https://github.com/oikki")}>
          <GitHubIcon />
        </IconButton>
        <></>
        <IconButton onClick={() => goToWebsite("https://twitter.com/mui_hq")}>
          <XIcon />
        </IconButton>
      </div>
    </Box>
  )
}


export default Footer