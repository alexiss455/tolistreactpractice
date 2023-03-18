import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addList(event) {
    event.preventDefault();

    setList([...list, inputValue]);
    setInputValue("");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
    
          <form onSubmit={addList}>
            <h1 className="head">To-Do List</h1>
            <div className="inputSave">
              <input
                name="todolist"
                autoComplete="off"
                required
                value={inputValue}
                onChange={handleChange}
              />
              <button type="submit">Add</button>
            </div>
            <ul className="items">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </form>

    </div>
  );
}

export default App;
