import { useState } from 'react';

const TodoEdit = ({ todoUpdate, editTodo }) => {
	const [editTodoState, setEditTodoState] = useState({ ...todoUpdate });
	console.log(editTodoState);
	const handleEditTodoChange = (event) => {
		setEditTodoState((v) => ({
			...v,
			[event.target.name]: event.target.value,
		}));
	};
	const handleUpdateTodoSubmit = (event) => {
		event.preventDefault();
		editTodo(editTodoState);
	};
	return (
		<div>
			<h1>TodoEdit</h1>
			<form className="form-group">
				<label htmlFor="title">Title</label>
				<input
					name="title"
					value={editTodoState.title}
					onChange={handleEditTodoChange}
				/>
				<label htmlFor="description"> Description</label>
				<textarea
					name="description"
					value={editTodoState.description}
					onChange={handleEditTodoChange}
				/>
				<button onClick={handleUpdateTodoSubmit}>update</button>
			</form>
		</div>
	);
};

export default TodoEdit;
