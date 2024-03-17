
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const PageSelectionButtons = ({voxelArtKeys, voxelArtsPerPage, currentIndex, PageButtonPressBehaviour} : {voxelArtKeys : string[], voxelArtsPerPage : number, currentIndex : number, PageButtonPressBehaviour : any}) => {
  return(
    <Container sx={{}}>
      <Button variant="outlined" sx={{m:1}} value={currentIndex - voxelArtsPerPage}
        disabled={currentIndex === 0}
        onClick={(e) => PageButtonPressBehaviour(e)}>
          Prev
      </Button>
      <Button variant="outlined" sx={{m:1}} value={currentIndex + voxelArtsPerPage}
        disabled={currentIndex > (voxelArtKeys.length-voxelArtsPerPage)}
        onClick={(e) => PageButtonPressBehaviour(e)}>Next
      </Button>
      <Typography>{currentIndex}-{currentIndex+5}</Typography>
      <br/>
      
      {(() => {
        let links = [];
        for (let i = 0; i < voxelArtKeys.length; i=i+voxelArtsPerPage) {
          links.push(
            <Button key={i} value={i} variant="text"
              onClick={(e) => PageButtonPressBehaviour(e)}
              disabled={currentIndex === i}>
              {i+1}-{i+voxelArtsPerPage}
            </Button>)
        }
        return links;
      })()}
    </Container>
  )

}

export default PageSelectionButtons;