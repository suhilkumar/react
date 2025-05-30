import { TextAreaComponent } from '../shared/TextAreaComponent';

const LearnContext = () => {
	const header = `create the context`;
	const steps = [
		`create a new file name context `,
		`inside that new file import {createContext} from react`,
		`create a variable and assign the context`,
		`const myContext = createContext()`,
		`we get a context object and it has 2 properties Provider and consumer`,
		`Provider => its a react component that we used to specify what data we want ot share`,
		`to render this component we use our context with provider and wrap our app`,
		`<myContext.provider><App /> </myContext.provider>`,
	];
	const step2 = [
		`we specify the data we want to shared`,
		`with the help of value prop we assign our data`,
		`value prop is super special this is what will be shared with rest of app`,
		`<myContext.provider value={v}><App /> </myContext.provider>`,
		`v will be shared accross all the components, sub components`,
		`list only the component inside the Provider  `,
	];

	const step3 = [
		`we consume the data`,
		`with the help of useContext hook we can access the data`,
		`you need to import the myContext in the component`,
		`create a variable and assign the useContext with myContext as params`,
		`const num = useContext(myContext);`,
		`now you can render it in your component`,
	];
	const val = `
	
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
	);`;
	return (
		<div>
			<h1>{header}</h1>
			<h3>Step1</h3>
			<ol>
				{steps.map((v, i) => (
					<li key={i++}>{v}</li>
				))}
			</ol>
			<h3>Step 2</h3>
			<ol>
				{step2.map((v, i) => (
					<li key={i++}>{v}</li>
				))}
			</ol>
			<h3>Step3</h3>
			<ol>
				{step3.map((v, i) => (
					<li key={i++}>{v}</li>
				))}
			</ol>

			<h2>How do you update the context value</h2>
			<ol>
				<li>you want the context value to change over time </li>
				<li>When it changes, we want to update content on the screen.</li>
				<li>
					So you create a Provider component and import useState and myContext
					in that component
				</li>
				<TextAreaComponent value={val} />
				<li>
					now you will replace the context.provider with provider component on
					root
				</li>
				<TextAreaComponent
					val={`	<Provider>
			{children}
		</Provider>`}
				/>
			</ol>
		</div>
	);
};

export default LearnContext;
