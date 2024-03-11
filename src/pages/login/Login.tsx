import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material";
import Container from "@mui/material";

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
    <div>
      <p>Login:</p>
      <button onClick={() =>signInwithGoogle}>Login with Google account</button>
    </div>
  );
};

export default Login
