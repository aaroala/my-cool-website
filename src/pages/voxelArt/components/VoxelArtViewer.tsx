import { Canvas } from 'react-three-fiber';
import { Box, OrbitControls } from '@react-three/drei';
import Container from '@mui/material/Container';
import { Vector3 } from 'three';
import { useEffect, useState } from 'react';
import { VoxelArt } from '../../../interfaces/interfaces';


//colors from this colo palette in order
// https://lospec.com/palette-list/cheerful-24
const colorMap: { [key: string]: string } = {
  b: "#0f0f12",
  c: "#505359",
  d: "#b6bfbc",
  e: "#f2fbff",
  f: "#5ee7ff",
  g: "#00a1db",
  h: "#1d5bb8",
  i: "#1f2c66",
  j: "#1b5245",
  k: "#2e8f46",
  l: "#58d92e",
  m: "#cbff70",
  n: "#ffff8f",
  o: "#ffdf2b",
  p: "#f0771a",
  q: "#e32239",
  r: "#851540",
  s: "#401a24",
  t: "#9c3b30",
  u: "#c95d3c",
  v: "#ed8a5f",
  w: "#ffbca6",
  x: "#eb75be",
  y: "#77388c"
};



const CreateVoxels = (data: string) => {
  const chunkStrings = data.split(",");
  const voxels = [];
  const chunk_size = 5;

  //the data string originally consists of 5x5x5 chunks that consist of 5x5x5 voxels
  //in this data string the chunks are seperated by comma
  //sextuple loop
  for (let chunk_x = 0; chunk_x < chunk_size; chunk_x++) {
    for (let chunk_y = 0; chunk_y < chunk_size; chunk_y++) {
      for (let chunk_z = 0; chunk_z < chunk_size; chunk_z++) {
        const chunkIndex = (chunk_x * chunk_size * chunk_size + chunk_y * chunk_size + chunk_z)
        const chunk = chunkStrings[chunkIndex]
        if(chunk.length === 0) continue;
        const chunkCharacters = chunk.split("");
        for (let x = 0; x < chunk_size; x++) {
          for (let y = 0; y < chunk_size; y++) {
            for (let z = 0; z < chunk_size; z++) {
              const index = (x * chunk_size * chunk_size + y * chunk_size + z);
              const char = chunkCharacters[index];
              if (char !== 'a') {
                voxels.push({ position: new Vector3(chunk_x * chunk_size + x, chunk_y * chunk_size + y, chunk_z * chunk_size + z), color: colorMap[char]});
              }
            }
          }
        }
      }
    }
  }
  return voxels
  
}


const VoxelArtViewer = ({data}: {data: string}) => {
  const voxels = CreateVoxels(data);
  const offset = new Vector3(-12,-12,-12)
  return (
    <Container sx={{ width: '90%', height: '400px', border: '2px solid black', boxShadow: "10"}}>
      <Canvas camera={{ position: [30, 0, 30] }}>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Box args={[27, 1, 27]} position={[12 + offset.x,-1 + offset.y, 12 + offset.z]}><meshStandardMaterial color={colorMap['l']} /></Box>
        {voxels.map((voxel, index) => (
          <Box key={index} args={[1, 1, 1]} position={[voxel.position.x + offset.x, voxel.position.y + offset.y, voxel.position.z + offset.z]}>
            <meshStandardMaterial color={voxel.color} />
          </Box>
        ))}
      </Canvas>
    </Container>
  );
}

export default VoxelArtViewer