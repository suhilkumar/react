import React from 'react';
import BookShow from './BookShow';

const BookList = ({ bookList, removeBook, updateBook }) => {
	return (
		<div className="book-list">
			<h1>Book Lists </h1>
			<div className="book-list-container">
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
