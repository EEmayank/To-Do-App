import {useState} from 'react'
import Todos from './Todos'
import AddToDo from './AddForm'
function App() {

  const [count, setCount] = useState(3)

  const [todos, setTodos] = useState(
    [
      {id:1, content:'This is a todo'},
      {id:2, content:'click on a todo to delete it'},
      {id:3, content:'add new todo below'},
    ]
  )
  
  const ChangeCount = (c) => {
    let temp = count
    if (c === 1) 
      setCount(++temp)
    else if (c === 0)
      setCount(--temp)
  }

  const Addtodo = (todo) => {
    todo.id = Math.random();
    let temp = [...todos, todo]
    setTodos(temp)
    ChangeCount(1)
    
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(
      todo => (todo.id !== id)
    ))
    ChangeCount(0)
  }

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
      <AddToDo addtodo={Addtodo}/>
    </div>
  );
}

export default App;
