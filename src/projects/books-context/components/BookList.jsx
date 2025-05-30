import { useContext } from 'react';
import BookShow from './BookShow';
import BookContext from '../context/bookContext';
const BookList = ({ bookList, removeBook, updateBook }) => {
	const { count, incrementCount } = useContext(BookContext);
	return (
		<div className="book-list">
			<h1>Book Lists </h1>
			<p>print Context value {count}</p>
			<div className="book-list-container">
				<button onClick={incrementCount}>add count</button>
				{bookList.length === 0 && <h2>No books available</h2>}
				{bookList &&
					bookList.map((book) => {
						return (
							<BookShow
								removeBook={removeBook}
								updateBook={updateBook}
								book={book}
								key={book.id}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default BookList;
