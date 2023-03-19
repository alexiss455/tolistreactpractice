import React, { useState } from "react";
import "./App.css";
import Items from "./components/todoitem";
import Inputfile from "./components/input";
function App() {
  const [list, setList] = useState([]);

  function addList(inputValue) {
    setList([...list, inputValue]);
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="App">
      <div className="form">
        <h1 className="head">To-Do List</h1>
        <Inputfile onAdd={addList} />
        <ul className="items">
          {list.map((item, index) => (
            <Items key={index} id={index} item={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
