import { Box, Container, Typography } from "@mui/material";
import background_image from "../../images/background.jpg"
import { Test } from "../../components/Test";

{/* <div style={{backgroundImage: `url(${background_image})`, backgroundSize: "cover", minHeight: 1000, width: 'auto'}}>
    <Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
      <br/>



      <Box component={"div"} bgcolor="secondary.dark" sx={{ display: 'flex', justifyContent: 'space-evenly', }} m={4} p={5}>
        <Box component={"div"} bgcolor="secondary.dark" p={10}>
          hey
        </Box>
        <Box component={"div"} sx={{backgroundColor: "#44444422" }} p={10}>
          hey
        </Box> 
      </Box>
    </Container>
  </div> */}
const HomePage = () => {
  return(
    <div>
      <Container sx={{textAlign: 'center'}}>
        <Typography mt={10} variant="h1">I don't know how to make cool landing page</Typography>
      </Container>
    </div>
  )
}

export default HomePage;