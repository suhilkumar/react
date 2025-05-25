import axios from 'axios';

const baseURL = 'https://api.unsplash.com';

export const searchImages = async (value) => {
	const response = await axios.get(`${baseURL}/search/photos`, {
		headers: {
			Authorization: 'Client-ID 2yt8DRCL-sH92ffdHJkHeL3YXj1oyt7egiDghc-Jslg',
		},
		params: {
			query: value,
		},
	});
	const data = await response?.data;
	return data;
};
