import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import InputLogin from "../components/InputLogin";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();
  const [emailAuth, setEmailAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, emailAuth, passwordAuth);
      console.log("User connected");
      setEmailAuth("");
      setPasswordAuth("");
      navigate("/Task"); //redirection
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <AuthForm
        emailAuth={emailAuth}
        setEmailAuth={setEmailAuth}
        passwordAuth={passwordAuth}
        setPasswordAuth={setPasswordAuth}
        handleAuth={handleAuth}
      />
    </>
  );
};

export default Login;
