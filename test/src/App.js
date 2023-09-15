import TodoList from "./TodoList";
import { useState,useRef} from "react";
import {v4 as uuidv4} from "uuid";

function App() {
	const [todos,setTodos] =useState([ ]);
	
	const todoNameRef=useRef();
	
	const handleAddTodo=()=>{
		const name=todoNameRef.current.value;
			
		if(name===""){
			return;
		}

		setTodos((prevTodos)=>
			{
				return [...prevTodos, {id:uuidv4(), name:name, completed:false}];
			});
		todoNameRef.current.value=null;
	};

	const handleRemoveTodo=()=>{
		const todosCopy=todos.filter((todo)=>!todo.completed);
		setTodos(todosCopy);
	};
	
	const toggleTodoCompleted=(id)=>{
		const todosCopy=[...todos];
		const target=todosCopy.find((todoCopy)=>todoCopy.id===id);
		target.completed=!target.completed;
		setTodos(todosCopy);
	}

	return (
		<>
		<TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted}/>
		<input type="text" ref={todoNameRef}/>
		<button onClick={handleAddTodo}>タスクの追加</button>
		<button onClick={handleRemoveTodo}>タスクの削除</button>
		<div>残りタスク：{todos.filter((todo)=>!todo.completed).length}</div>	

		</>
	);
}

export default App;
