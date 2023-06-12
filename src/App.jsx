import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,

    };

    setList([...list, newTodo]);

    setInput("");

  };
  const deleteTodo = (id) =>{
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div>
      <h1 className='one'> My ToDo list</h1>
      <input 
        type='text'
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={()=>addTodo(input)} >Add</button>
        <ul className='list'>
          {list.map((todo) => (
            <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
    </div>   
  );
}

export default App;
