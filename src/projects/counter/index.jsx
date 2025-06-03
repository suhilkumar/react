import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>++ Increment</button>
			<div>Count: {counter}</div>
		</div>
	);
};

export default Counter;
