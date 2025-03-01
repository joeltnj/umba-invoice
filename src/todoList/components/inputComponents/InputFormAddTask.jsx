import { useState } from "react";

const InputFormAddTask = ({ title, description, handleSubmit, handleChange }) => {
  return (
    <>
      {/* <InputField /> */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" value={title} onChange={handleChange} />
        <br />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Added</button>
      </form>
    </>
  );
};
export default InputFormAddTask;
