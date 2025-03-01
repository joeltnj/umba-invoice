import { useState } from "react";

const ActionButton = ({ actionName, handleAction }) => {
  return (
    <>
      <input type="button" value={actionName} onClick={handleAction} />
    </>
  );
};

export default ActionButton;


