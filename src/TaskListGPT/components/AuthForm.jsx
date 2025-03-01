import { useState } from "react";

const AuthForm = ({ emailAuth, setEmailAuth, passwordAuth, setPasswordAuth, handleAuth }) => {
  return (
    <>
      <form onSubmit={handleAuth}>
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          name="email"
          value={emailAuth}
          onChange={(e) => setEmailAuth(e.target.value)}
        />
        <br />
        <label htmlFor="">Pass-word</label>
        <input
          type="text"
          name="password"
          value={passwordAuth}
          onChange={(e) => setPasswordAuth(e.target.value)}
        />
        <br />
        <input type="submit" value="Enter" />
      </form>
    </>
  );
};

export default AuthForm;
