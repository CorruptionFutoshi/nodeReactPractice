import TodoList from "./TodoList";
import { useState} from "react";

function App() {
	const [todos,setTodos] =useState(["Todo1","Todo2"]);	

	return (
		<>
		<TodoList todos={todos}/>
		<input type="text" />
		<button>タスクの追加</button>
		<button>タスクの削除</button>
		<div>残りタスク：０</div>	

		</>
	);
}

export default App;
