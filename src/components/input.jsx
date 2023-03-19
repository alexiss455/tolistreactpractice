import React, { useState } from "react";

export default function inputfile(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
      <form
        className="inputSave"
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(inputValue);
          setInputValue("");
        }}
      >
        <input
          name="todolist"
          autoComplete="off"
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          Add
          
        </button>
      </form>

  );
}
