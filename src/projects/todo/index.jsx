import { useEffect, useState } from 'react';
import { addTodos, baseURL } from './api';
import TodoList from './Component/TodoList';
import './index.css';
import CreateTodo from './Component/CreateTodo';
import axios from 'axios';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [update, setUpdate] = useState(false);
	useEffect(() => {
		getDatafromJsonServer();
	}, [update]);

	const getDatafromJsonServer = async () => {
		const response = await axios.get(`${baseURL}/todos`);
		const data = await response.data;
		setTodos(data);
	};

	const createTodoList = async (todo) => {
		if (!todo.title && !todo.description) return;
		try {
			const response = await axios.post(`${baseURL}/todos`, todo);
			if (response.data) {
				setUpdate(!update);
			}
		} catch (e) {
			console.error(e);
		}
	};

	const editTodosById = async (newTodo) => {
		const id = newTodo.id;
		const response = await axios.put(`${baseURL}/todos/${id}`, { ...newTodo });
		const data = await response.data;

		const updateTodos = todos.map((todo) => {
			if (todo.id == id) {
				return { ...todo, ...data };
			}
			return todo;
		});

		setTodos(updateTodos);
	};

	const deleteTodosById = async (id) => {
		const response = await axios.delete(`${baseURL}/todos/${id}`);
		const { status } = await response;
		if (status === 200) {
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		}
	};

	return (
		<div className="container">
			<h1>Todo List</h1>
			<CreateTodo create={createTodoList} />
			<TodoList
				todos={todos}
				editTodosById={editTodosById}
				deleteTodo={deleteTodosById}
			/>
		</div>
	);
};
export default Todo;
