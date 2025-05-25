// | Pattern                    | Use When...                           |
// | -------------------------- | ------------------------------------- |
// | Lazy Initialization        | Expensive state setup                 |
// | Functional Updates         | Based on previous value               |
// | Manual Object Merging      | Updating part of an object            |
// | useEffect Cleanup          | Avoiding memory leaks                 |
// | Batching/Chaining Updates  | Running multiple changes at once      |
// | Reset State                | Clearing forms or filters             |
// | Controlled vs Uncontrolled | Handling form fields                  |
// | useReducer (alternative)   | Complex state logic or multiple steps |
import React, { useState, useEffect } from 'react';

const initialFormState = () => ({
	name: '',
	email: '',
	age: '',
});

export function MultiStepForm() {
	// Lazy initialization
	const [form, setForm] = useState(() => initialFormState());
	const [step, setStep] = useState(1);
	const [submitted, setSubmitted] = useState(false);

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	// Handle next step
	const nextStep = () => {
		setStep((prev) => prev + 1);
	};

	// Handle previous step
	const prevStep = () => {
		setStep((prev) => prev - 1);
	};

	// Reset form
	const handleReset = () => {
		setForm(initialFormState());
		setStep(1);
		setSubmitted(false);
	};

	// Simulated submission
	useEffect(() => {
		let timer;
		if (submitted) {
			timer = setTimeout(() => {
				alert('Form submitted!');
				handleReset();
			}, 1000);
		}
		return () => clearTimeout(timer); // Cleanup
	}, [submitted]);

	// Derived state
	const isNextDisabled = step === 1 && (!form.name || !form.email);

	return (
		<div style={{ padding: 20, maxWidth: 400 }}>
			<h2>Step {step} of 3</h2>

			{step === 1 && (
				<div>
					<input
						name="name"
						placeholder="Name"
						value={form.name}
						onChange={handleChange}
					/>
					<br />
					<br />
					<input
						name="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
					/>
					<br />
					<br />
				</div>
			)}

			{step === 2 && (
				<div>
					<input
						name="age"
						placeholder="Age"
						value={form.age}
						onChange={handleChange}
					/>
					<br />
					<br />
				</div>
			)}

			{step === 3 && (
				<div>
					<h4>Review</h4>
					<p>
						<strong>Name:</strong> {form.name}
					</p>
					<p>
						<strong>Email:</strong> {form.email}
					</p>
					<p>
						<strong>Age:</strong> {form.age}
					</p>
				</div>
			)}

			<div style={{ marginTop: 20 }}>
				{step > 1 && <button onClick={prevStep}>Back</button>}
				{step < 3 && (
					<button
						onClick={nextStep}
						disabled={isNextDisabled}
					>
						Next
					</button>
				)}
				{step === 3 && (
					<button onClick={() => setSubmitted(true)}>Submit</button>
				)}
				<button
					onClick={handleReset}
					style={{ marginLeft: 10 }}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
