import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
	return props.todos.map((todo)=> <Todo todo={todo} key={todo}/>); 
};

export default TodoList;
