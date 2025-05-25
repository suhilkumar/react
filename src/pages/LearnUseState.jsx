import { useState } from 'react';
import { TextAreaComponent } from '../shared/TextAreaComponent';

export const LearnUseState = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>Learn UseState</h1>
			<p>
				In React State is a built in object that holds data or values that can
				be change over time{' '}
			</p>
			<p>
				whenever state updates react will re-render the component to reflect
				those changes in ui
			</p>

			<h3>why State is important ?</h3>
			<ul>
				<li>It allows component to be interactive and dynamic</li>
				<li>
					Stores data that may change due to user interaction, Api response etc
				</li>
				<li>Triggers re-rendering when updated</li>
			</ul>

			<h3>How to store states in component</h3>
			<ol>
				<li>Import useState hook from react</li>
				<li>
					create a variable and pass in useState hook and setup a initial value
				</li>
				<li>
					use array destructuring to pass variable and a callbackfunction thats
					update the state at the time of declaration
				</li>
				<li>use curly braces and pass in the variable in jsx element</li>
				<li>
					you can't change the value of state directly you have to use setState
					function to update the state to trigger re-render
				</li>
			</ol>

			<h3>Basic Usage of useState and setState</h3>
			<h5>Updating the number Values</h5>
			<TextAreaComponent
				value="import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
"
			/>

			<h4>Updating Strings</h4>
			<p>capturing values from an form element</p>
			<TextAreaComponent
				value="const [name, setName] = useState('Alice');
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                "
			/>

			<h4>Updating Objects</h4>
			<p>
				Don't mutate the object directly. Always make a copy before updating
			</p>
			<TextAreaComponent
				value="const [user, setUser] = useState({ name: 'Alice', age: 25 });

                const updateName = () => {
                setUser(prevUser => ({ ...prevUser, name: 'Bob' }));
                };
                "
			/>

			<h4>Updating Arrays</h4>
			<p>Add items</p>
			<TextAreaComponent
				value="const [items, setItems] = useState([]);

const addItem = () => {
  setItems(prevItems => [...prevItems, { id: Date.now(), value: 'New' }]);
};
"
			/>
			<p>Remove Item</p>
			<TextAreaComponent
				value="const removeItem = (id) => {
  setItems(prevItems => prevItems.filter(item => item.id !== id));
};
"
			/>
			<h4>Functional Updates</h4>
			<p>
				If you are updating based on the previous state, always use the function
				version:
			</p>
			<p>
				Why? Because state updates may be batched (not immediate) and
				referencing the previous value avoid bugs.
			</p>
			<TextAreaComponent
				value="const [count, setCount] = useState(0);

// correct
setCount(prevCount => prevCount + 1);
"
			/>
			<h4>Delayed Update (with Timeout)</h4>
			<p>
				you can use useEffect hooks to update it pass a SetTimeout function with
				delayed timer{' '}
			</p>
			<TextAreaComponent
				value="useEffect(() => {
  const timer = setTimeout(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearTimeout(timer); // cleanup
}, []);
"
			/>
			<h4>Toggle Boolean</h4>
			<p>you can directly apply the toggle functionality</p>
			<TextAreaComponent
				value="const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(prev => !prev)}>
  {isOpen ? 'Close' : 'Open'}
</button>
"
			/>
			<h4>You can do Batched Updates as well (react optimizes)</h4>
			<p>React may batch multiple setState calls in the same event:</p>
			<TextAreaComponent
				value="setCount(count + 1);
setCount(count + 1); // Still only increases by 1!

// correct:
setCount(prev => prev + 1);
setCount(prev => prev + 1); // Increases by 2
"
			/>
			<h4>Setting State Conditionally</h4>
			<p>Don't call setState in loops or directly in render</p>
			<p>Only in event handlers and useEffect </p>
			<TextAreaComponent
				value="if (userIsLoggedIn) {
  setName('John');
}
"
			/>
			<h3>
				example of counter every time button click counter value gets updated
			</h3>

			<div className="counter-app">
				<h1>Counter {counter}</h1>
				<div style={{ display: 'flex', justifyItems: 'space-evenly' }}>
					<button onClick={() => setCounter(counter + 1)}>Add</button>
					<button onClick={() => setCounter(counter - 1)}>subtract</button>
				</div>
			</div>
		</>
	);
};
