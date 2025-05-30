import { useState } from 'react';

const BookCreate = (props) => {
	const [bookInfo, setBookInfo] = useState({
		id: '',
		title: '',
		description: '',
		updatedAt: '',
	});

	const handleBookSubmit = (e) => {
		e.preventDefault();
		if (!bookInfo.title && !bookInfo.description && !bookInfo.id) return;
		props.createBook(bookInfo);
		setBookInfo({ id: '', title: '', description: '', updatedAt: '' });
	};
	return (
		<div className="book-create-container">
			<h1>create books</h1>
			<form>
				<label htmlFor="title"> Title</label>
				<input
					name="title"
					type="text"
					onChange={(e) =>
						setBookInfo((state) => ({
							...state,
							title: e.target.value,
						}))
					}
					value={bookInfo.title}
				/>
				<br />
				<label htmlFor="desc">Description</label>
				<textarea
					htmlFor="desc"
					name="description"
					onChange={(e) =>
						setBookInfo((state) => ({
							...state,
							description: e.target.value,
						}))
					}
					value={bookInfo.description}
				/>
				<br />
				<button
					type="submit"
					onClick={handleBookSubmit}
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default BookCreate;
