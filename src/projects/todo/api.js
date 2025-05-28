import axios from 'axios';

export const baseURL = 'http://localhost:3000';

// export const getTodos = async () => {
// 	const response = await axios.get(`${baseURL}/todos`);
// 	const data = await response.data;
// 	return data;
// };

export const addTodos = async (payload) => {
	try {
		const response = await axios.post(`${baseURL}/todos`, payload);
		const re = await response;
		return re;
	} catch (e) {
		console.error(e);
	}
};
