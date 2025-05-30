import { useEffect, useState } from 'react';

const DateTime = () => {
	// create a date state
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (date) => {
		return date.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	};
	// create a date string
	const formatDate = (date) => {
		return date.toLocaleDateString(undefined, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
	};
	return (
		<p>
			{formatDate(date)} {formatTime(date)}
		</p>
	);
};

export default DateTime;
