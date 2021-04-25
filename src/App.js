import { useState } from 'react';
import './App.scss';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm'
import TestApi from './component/TestApi';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "a" },
    { id: 2, title: "b" },
    { id: 3, title: "c" },
  ])
  const onTodoClick = (element) => {
     const index =  todoList.findIndex(x => x.id === element.id);
     if(index < 0) return;

     const newTodoList = [...todoList];
     newTodoList.splice(index,1);
     setTodoList(newTodoList)
  }
  const handleAdd = (element) =>{
    const newTodoList = [...todoList];
    newTodoList.push(element);
    setTodoList(
      newTodoList
    )
  }
  return (
    <div className="app">
      wellcom
      {/* <ColorBox/> */}
      <TodoList
        todos={todoList}
        onTodoClick={onTodoClick}
      />
      <TodoForm
      add={handleAdd} 
      />
      <TestApi/>
    </div>
  );
}
export default App;
