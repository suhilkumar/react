import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [searchValue, setSearchValue] = useState('');
	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (searchValue.length < 3) return;
		onSubmit(searchValue.toLowerCase());
	};
	return (
		<>
			<div>
				<form onSubmit={handleFormSubmit}>
					<input
						autoFocus
						style={{ width: '20em' }}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<br />
					{searchValue.length < 3 && 'Please enter more then 3 character'}
				</form>
			</div>
		</>
	);
};

export default SearchBar;
