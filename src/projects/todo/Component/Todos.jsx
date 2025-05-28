import { Create, DeleteForever } from '@mui/icons-material';
import { Icon } from '@mui/material';
import React, { useState } from 'react';
import TodoEdit from './TodoEdit';

const Todos = ({ todo, editTodo, removeTodo }) => {
	const [showEditIcon, setShowEditIcon] = useState(false);
	const handleDelete = () => {
		removeTodo(todo.id);
	};
	const handleEdit = () => {
		setShowEditIcon(!showEditIcon);
	};
	let content = {
		title: <h1>{todo.title}</h1>,
		description: <p>{todo.description}</p>,
	};
	let editTodosById = (p) => {
		setShowEditIcon(!showEditIcon);
		editTodo(p);
	};
	if (showEditIcon) {
		content.title = (
			<TodoEdit
				editTodo={editTodosById}
				todoUpdate={todo}
			/>
		);
	}
	return (
		<div className="todo-card">
			<div className="todo-card-header">
				{content.title}
				<div className="icon-todos">
					{/* {!showEditIcon && ( */}
					<Icon onClick={handleEdit}>
						<Create />
					</Icon>
					{/* )} */}
					<Icon onClick={handleDelete}>
						<DeleteForever />
					</Icon>
				</div>
			</div>
			<main>{!showEditIcon && content.description}</main>
		</div>
	);
};

export default Todos;
