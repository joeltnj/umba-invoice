// import { useState } from "react";
// import HomePage from "./HomePage";

const Button = ({ handleClick, actionName }) => {
  // const [data, setData] = useState;
  return (
    <>
      {/* <InputF /> */}
      <button onClick={handleClick}>{actionName}</button>
    </>
  );
};

export default Button;
