import { useState } from 'react';

const SearchString = () => {
	const [newItemName, setNewItemName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Task Buds</h4>
			<div className="form-control">
				<input
					type="text"
					value={newItemName}
					onChange={(e) => setNewItemName(e.target.value)}
				/>
				<button
					type="submit"
					className="btn"
				>
					Add Task
				</button>
			</div>
		</form>
	);
};

export default SearchString;
