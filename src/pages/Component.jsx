import CardComponent from '../shared/CardComponent';

const Component = () => {
	const data = [
		{
			id: '1',
			title: 'Siri',
			content: `its an assistant apple has developed `,
		},
		{
			id: '3',
			title: 'Bixby',
			content: `its an assistant Samsung has developed `,
		},
		{
			id: '4',
			title: 'ok google',
			content: `its an assistant google has developed `,
		},
		{
			id: '2',
			title: 'Alexa',
			content: `its an assistant Amazon has developed `,
		},
	];
	return (
		<>
			<h1>How to create reusable component</h1>
			<p>
				find the common functionality and try to create a seperate component so
				you can use this component on multiple places in your app and it will
				render your component fast you can use props to pass diff. data in each
				component but the ui will remain same <br />
				for example display list of cards where we create one card component but
				use diff data and pass it as props for each card element inside the loop{' '}
			</p>
			<h3>Steps for iterating the items</h3>
			<ol>
				<li>
					create a card component and configure it to accept the data from
					parent component
				</li>
				<li>import the card componnent in your component </li>
				<li>write the code to import the data from server or data file</li>
				<li>
					iterate it with map method and pass the data in a card component{' '}
				</li>
				<li>extract the data from props in card component and render it</li>
			</ol>
			<div style={{ display: 'flex', gap: '1em' }}>
				{data &&
					data.map((val) => {
						return (
							<CardComponent
								key={val.id}
								pData={val}
							/>
						);
					})}
			</div>
		</>
	);
};

export default Component;
