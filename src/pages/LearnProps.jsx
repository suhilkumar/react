import React from 'react';

const LearnProps = () => {
	let min = 10;
	return (
		<>
			<h1>Learn Props</h1>
			<p>props are nothing but short form of properties</p>
			<p>Props are inputs to React Components.</p>
			<p>They are used to pass data from a parent to a child components</p>
			<p>Props are read-only and immutable inside the child components</p>
			<p>
				Think of props like function arguments and components like functions
			</p>
			<h4>Rules for Props</h4>
			<ul>
				<li>
					Props or Properties are used as an attributes inside html elements in
					JSX
				</li>
				<li>if you are using string you can write in quotes</li>
				<li>for any other types you have to use curly braces</li>
				<li>you can pass all types of values in props</li>
				<li>
					if you are passing a boolean value of true you just need to declare
					the property name
				</li>
			</ul>
			<input
				type="number"
				min={min}
				max={100}
				required
			/>
			<br />
			<textarea autoFocus />
		</>
	);
};

export default LearnProps;
