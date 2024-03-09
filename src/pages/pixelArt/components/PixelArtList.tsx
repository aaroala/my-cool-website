

import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import { PixelArt } from '../../../interfaces/interfaces';

const PixelArt16x16 = ({ imageString }: { imageString: string }) => {
  const colors = [
    "#FFF1E8",
    "#000000",
    "#1D2B53",
    "#7E2553",
    "#008751",
    "#AB5236",
    "#5F574F",
    "#C2C3C7",
    "#FF77A8",
    "#FF004D",
    "#FFA300",
    "#FFEC27",
    "#00E436",
    "#29ADFF",
    "#83769C",
    "#FFCCAA",
  ];

  const numbersArray = imageString.replace(/\[|\]/g, '').split(',').map(Number).reverse();
  return (
    <div style={{ width: '160px', height: '160px', overflow: 'hidden' }}>
      {numbersArray.map((number: number, index: number) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: colors[number],
            float: 'right',
          }}
        ></div>
      ))}
    </div>)
}

const PixelArtList = ({pixelArts}: { pixelArts: PixelArt[] }) => {
  return(
    <div style={{display:'flex', flexDirection: 'row', flexWrap:'wrap'}}>
        {pixelArts.map((value: PixelArt, index) => (
          <div key={value.id} style={{margin: "10px"}}>
            {value.username} {value.id}
            <PixelArt16x16 imageString={value.pixel_canvas_256} />
            {value.creation_date.toString().substring(0,10)}
            <br/>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {value.likes}
              <FavoriteIcon/>
            </Container>

          </div>
        ))}
        </div>
  )
}

export default PixelArtList;