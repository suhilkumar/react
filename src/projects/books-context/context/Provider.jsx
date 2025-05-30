import { useState } from 'react';
import BooksContext from './bookContext';

function Provider({ children }) {
	const [count, setCount] = useState(5);

	const valueToShare = {
		count,
		incrementCount: () => {
			setCount(count + 1);
		},
	};
	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export default Provider;
