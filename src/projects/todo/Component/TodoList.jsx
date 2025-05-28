import Todos from './Todos';

const TodoList = ({ todos, editTodosById, deleteTodo }) => {
	if (!todos.length) return <h1>No Data</h1>;
	return (
		<div className="todolist-container">
			<h1>Todo List</h1>
			<div className="list">
				{todos ? (
					todos.map((todo) => (
						<Todos
							key={todo.id}
							todo={todo}
							removeTodo={deleteTodo}
							editTodo={editTodosById}
						/>
					))
				) : (
					<h1>No List is Present</h1>
				)}
			</div>
		</div>
	);
};

export default TodoList;
