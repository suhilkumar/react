import { Card, CardHeader, CardContent } from '@mui/material';
const CardComponent = (props) => {
	const { title, content } = props.pData;

	return (
		<>
			<Card sx={{ width: '400px' }}>
				<CardHeader title={title.toUpperCase()} />
				<CardContent>{content}</CardContent>
			</Card>
		</>
	);
};

export default CardComponent;
