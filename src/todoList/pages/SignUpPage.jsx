import { useState } from "react";
import InputFormSignUp from "../components/inputComponents/InputFormSignUp";
import { useNavigate } from "react-router-dom";
import FeuilletChant from "./FeuilletChant";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    motDePasse: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      nom: "",
      email: "",
      motDePasse: "",
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // {
  //   console.log("Données du formulaire :", submittedData);
  // }


  const couplets=["klsqdhhsij hjbqf sdfqus sdkhdf","usduhqusqhuqhur shdqs hsqrguqreg s","usgduus hsdq hsqgqrgrq"]
  return (
    <>
      <p>{formData.nom}</p>
      <p>{formData.email}</p>
      <p>{formData.motDePasse}</p>
      <p>{}</p>
      <InputFormSignUp
        nom={formData.nom}
        email={formData.email}
        motDePasse={formData.motDePasse}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <FeuilletChant titre={"le matin"} refrains={"commme un enfant du hshsh"} couplets={couplets}  />

      
    </>
  );
};

export default SignUpPage;
