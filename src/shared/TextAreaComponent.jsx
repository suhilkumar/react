export const TextAreaComponent = ({ value }) => {
	return (
		<textarea
			style={{
				width: '80%',
				height: '15em',
			}}
			value={value}
			readOnly
		/>
	);
};
