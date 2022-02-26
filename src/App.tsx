import React, { useState } from 'react'

import './App.css';
import Todo from './components/models/todo';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {

  const [ todos, setTodos ] = useState<Todo[ ]>([])
   


  const addTodoHandler = ( todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo)
    })

  }

  const removeTodoHandler = (todoId: string ) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== todoId)
    })

  }

  return (
    <div className="App">
      <h1>This is the basic Application</h1>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
