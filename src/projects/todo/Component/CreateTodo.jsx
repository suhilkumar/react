import React, { useState } from 'react';

const CreateTodo = ({ create }) => {
	const [todos, setTodos] = useState({
		title: '',
		description: '',
	});
	const handleTodoInfo = (e) => {
		setTodos((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		create(todos);
		setTodos({
			title: '',
			description: '',
		});
	};
	return (
		<div className="create-todo-container">
			<h1>Add Task</h1>

			<form className="form-group">
				<label htmlFor="title">Title </label>
				<input
					id="title"
					name="title"
					value={todos.title}
					onChange={handleTodoInfo}
				/>
				<label htmlFor="description"> Description</label>
				<textarea
					id="description"
					name="description"
					value={todos.description}
					onChange={handleTodoInfo}
				/>
				<button
					className="button"
					type="submit"
					onClick={handleSubmit}
				>
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default CreateTodo;
