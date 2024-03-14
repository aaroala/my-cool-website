import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Box, Container, Typography } from "@mui/material"

const Footer = () => {
  return(
    <Box component={"div"} bgcolor='secondary.dark' sx={{display: 'flex', justifyContent: 'space-between', boxShadow: 10}} p={4}>
      <Typography>Copyright oikki</Typography>
      <div style={{float:'right'}}>
        <GitHubIcon /> 
        <>   </>
        <XIcon />
      </div>
    </Box>
  )
}


export default Footer