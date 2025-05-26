import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './book.css';
import { useState } from 'react';
const BooksProject = () => {
	// create a booklist state
	const [bookList, setBookList] = useState([]);
	// create a function which generates a unique id for each book
	const getBookId = () => {
		const uniqueId = Math.random().toString(36).substring(2, 9);
		return uniqueId;
	};
	// create a function which add books in booklist
	const createBook = (book) => {
		if (!book.id) {
			book.id = getBookId();
			book.updatedAt = new Date().toLocaleString();
		}
		setBookList((prevState) => [book, ...prevState]);
	};

	// create a function which remove books from booklist
	const removeBook = (bookId) => {
		setBookList(bookList.filter((item) => item.id != bookId));
	};

	// create a function which update books in booklist
	const updateBook = (bookId, updatedBook) => {
		setBookList((prevState) =>
			// update the book with the given bookId otherwise return the book as it is
			prevState.map((book) =>
				book.id === bookId ? { ...book, ...updatedBook } : book,
			),
		);
	};
	return (
		<div className="container">
			<header>Books Project</header>
			<main className="main-container">
				<BookCreate createBook={createBook} />
				<BookList
					bookList={bookList}
					removeBook={removeBook}
					updateBook={updateBook}
				/>
			</main>
		</div>
	);
};
export default BooksProject;
