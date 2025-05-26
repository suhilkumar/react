import { Icon } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
const BookShow = ({ book, removeBook, updateBook }) => {
	const handleRemoveBook = (id) => {
		removeBook(id);
	};

	const handleEditBook = () => {
		const title = prompt('Enter new book title', book.title);
		const description = prompt('Enter new book description', book.description);
		if (title && description) {
			book.title = title;
			book.description = description;
			book.updatedAt = new Date().toLocaleString();
			// Assuming updateBook is passed as a prop to update the book in the list
			updateBook(book.id, { title, description, updatedAt: book.updatedAt });
		}
	};
	return (
		<div className="book-item">
			<div className="book-item-header">
				<h1>{book.title}</h1>
				<div>
					<button onClick={handleEditBook}>
						<Icon>
							<CreateIcon />
						</Icon>
					</button>
					<button onClick={() => handleRemoveBook(book.id)}>X</button>
				</div>
			</div>
			<div className="book-description">
				<h4>{book.updatedAt}</h4>
				<p>{book.description}</p>
			</div>
		</div>
	);
};

export default BookShow;
