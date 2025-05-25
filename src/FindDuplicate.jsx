import React, { useState } from 'react';

function FindDuplicate() {
	const [name, setName] = useState('');
	function findDuplicate(stringText) {
		const arr = stringText.split(' ');
		const value = new Set();
		const duplicate = [];

		arr.forEach((v) => {
			if (value.has(v)) {
				duplicate.push(v);
			} else {
				value.add(v);
			}
		});
		return duplicate.join();
	}
	return (
		<>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>duplicate</p>
			<p>{findDuplicate(name)}</p>
		</>
	);
}

export default FindDuplicate;
