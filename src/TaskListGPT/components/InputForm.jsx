import { useState } from "react";

const InputForm = ({ title, setTitle, description, setDescription, handleAddTask }) => {
  return (
    <>
      <form onSubmit={handleAddTask}>
        <label htmlFor="">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Task" />
      </form>
    </>
  );
};

export default InputForm;
