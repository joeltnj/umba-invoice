import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFormLogin from "../components/inputComponents/InputFormLogin";
import Button from "../components/inputComponents/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    motDePasse: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      email: "",
      motDePasse: "",
    });
    navigate("/HomePage");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <p>{formData.email}</p>
      <p>{formData.motDePasse}</p>
      <p>{}</p>
      <InputFormLogin
        email={formData.email}
        motDePasse={formData.motDePasse}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Button handleClick={() => navigate("/SignUpPage")} actionName="Go to Sign Up Page" />
      
    </>
  );
};

export default LoginPage;
