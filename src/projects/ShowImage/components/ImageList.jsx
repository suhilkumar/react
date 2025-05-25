import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
	return (
		<div className="container">
			{images &&
				images.map((image) => {
					return (
						<ImageShow
							key={image.id}
							image={image}
						/>
					);
				})}
		</div>
	);
};

export default ImageList;
