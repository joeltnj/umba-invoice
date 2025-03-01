import { useState } from "react";

const InputFormLogin = ({
  email,
  motDePasse,
  handleSubmit,
  handleChange,
}) => {

  return (
    <>
      {/* <InputField /> */}

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
export default InputFormLogin;
