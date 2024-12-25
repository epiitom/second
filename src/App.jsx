import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Createtodo} from './Components/Createtodo.jsx'
import {Todos} from './Components/Todos.jsx'

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App