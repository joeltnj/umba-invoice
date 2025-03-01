import { useState } from "react";

const InputFormSignUp = ({ nom, email, motDePasse, handleSubmit, handleChange }) => {
  return (
    <>
      {/* <InputField /> */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={nom} onChange={handleChange} />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="motDePasse"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
export default InputFormSignUp;
