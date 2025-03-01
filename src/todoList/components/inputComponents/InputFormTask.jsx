import { useState } from "react";

const InputFormTask = ({ nom, name, value, handleSubmit, handleChange }) => {
  return (
    <>
      {/* <InputField /> */}

      <form onSubmit={handleSubmit}>
        <label>
          <strong>{nom} :</strong>
        </label>
        <input type="text" name={name} placeholder="Title" value={value} onChange={handleChange} />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
};
export default InputFormTask;
