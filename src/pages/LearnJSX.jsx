const LearnJSX = () => {
	let message = 'bye there';
	if (Math.random() > 0.5) message = 'hi there';
	const date = new Date();

	const time = date.toLocaleTimeString();

	let obj = {
		name: 'suhil',
		age: 32,
		bool: false,
	};
	return (
		<>
			<h1>LearnJSX</h1>
			<p>{time}</p>
			<p>
				JSX is Javascript XML its basically a way to write html like code inside
				javascript function
			</p>
			<p>there are certain rules you would have to follow for JSX</p>
			<ul>
				<li>All React component must return a single html element</li>
				<li>you have to use Curly braces for using js variable in jsx</li>
				<li>you can't write an object or array inside jsx element</li>
				<li>you can't show boolean, null or undefined in jsx element </li>
				<li>you can use multiple curly brackets inside jsx element</li>
				<li>you can't use class in jsx you have to use className</li>
				<li>you can't use for attributes you have to use htmlFor</li>
				<li>All the attributes in jsx elements must be camelCasing</li>
				<li>All Jsx element must be self-closing tags</li>
				<li>you can use fragments instead of extra div's </li>
				<li>Inline styles must be provided as an object</li>
			</ul>

			<p>{message}</p>
			<p>{obj.name}</p>
			<p>{obj.age}</p>
			<p>{obj.bool}</p>
		</>
	);
};

export default LearnJSX;
