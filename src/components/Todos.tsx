import React from "react";
import Todo from "./models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: () => void }> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem text={item.text} onRemoveTodo={onRemoveTodo}/>
			))}
		</ul>
	);
};

export default Todos;
