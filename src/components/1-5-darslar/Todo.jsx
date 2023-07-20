import React, { useState } from "react";
import Header from "./Header";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  // const [lang, setLang] = useState(
  //   localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz' )

  // const changeLanguageHandler = (e) =>{
  //   setLang(e.target.value)
  //   localStorage.setItem('lange', e.target.value)
  // }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editIndex === -1) {
        setTodos([...todos, inputValue]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setInputValue("");
    }
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      {/* <Header lang = {lang} changeLanguage = {changeLanguageHandler} /> */}
      <h1 className="text-center">Todo List</h1>
      <div className="card">
        <div className="card-header d-flex">
          <input
            className="form-control w-75"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new todo"
          />
          <button className="btn btn-primary w-25 mx-5" onClick={handleAddTodo}>
            {editIndex === -1 ? "Add" : "Update"}
          </button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li className="list-group-item d-flex justify-content-between"
                key={index}>
                {todo}
                <div>
                  <button className="btn btn-info" onClick={() => handleEditTodo(index)}>Edit</button>
                  <button className="btn btn-danger mx-2" onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
