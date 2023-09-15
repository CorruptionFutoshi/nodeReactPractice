import React from "react";

const Todo =({todo,toggleTodoCompleted}) =>{
	const handleCheckBoxClick=()=>{
		toggleTodoCompleted(todo.id);
	};

	return [
	 <div>
	  <label>	
	   <input type="checkbox" checked={todo.completed} onChange={handleCheckBoxClick} readOnly/>
	  </label>
	  {todo.name}

	 </div>
	];
};

export default Todo;
