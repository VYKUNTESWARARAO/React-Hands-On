import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import './App.css';

const App = () => {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="item">
      <Item1 />
      <Item2 />
      </div>
    </center>
  );
};

export default App;
