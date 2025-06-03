const SingleItem = ({ item }) => {
	return (
		<div>
			<input
				type="checkbox"
				checked={item.isDone}
				onChange={() => console.log('editTask')}
			/>
			<p>{item.title}</p>

			<button onClick={() => console.log('delete task')}> delete</button>
		</div>
	);
};

export default SingleItem;
