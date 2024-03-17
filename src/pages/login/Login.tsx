// @ts-nocheck

import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { Container  } from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
    const signInwithGoogle = async () => {
      try{
        const result = await signInWithPopup(auth, provider);
        console.log(result.user)
        navigate("/");
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  return (
    <Container sx={{mt: 10, textAlign: "center"}}>
      <Typography variant="h3" sx={{mb:3}}>Login with:</Typography>
      <Button variant="contained" onClick={() =>signInwithGoogle()}>Google account</Button>
    </Container>
  );
};

export default Login
