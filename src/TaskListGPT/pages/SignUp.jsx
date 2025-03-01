import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import AuthForm from "../components/AuthForm";

// import { useState } from "react"

const SignUp = () => {
  const [emailAuth, setEmailAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailAuth, passwordAuth);
      console.log("Utilisateur créé :", userCredential.user);
      setEmailAuth("");
      setPasswordAuth("");
      console.log(emailAuth, passwordAuth);
      navigate("/Login");
    } catch (error) {
      console.error("Erreur d'inscription :", error.message);
    }

    // const formData = new FormData(document.getElementById('form'))

    // const email = formData.get('mail')
    // const password = formData.get('password')
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      {/* <button onClick={() => navigate('/')}>Home</button> */}
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

export default SignUp;
