import { useState } from 'react';
import { searchImages } from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import './showImage.css';

const ShowImage = () => {
	let [imageResult, setImageResult] = useState([]);
	const getSearchContent = async (value) => {
		const data = await searchImages(value);
		const result = await data.results;
		setImageResult(result);
	};
	return (
		<>
			<header>Search for Image</header>
			<main className="main-content">
				<SearchBar onSubmit={getSearchContent} />
				<ImageList images={imageResult} />
			</main>
		</>
	);
};

export default ShowImage;
