import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api';
const GET_URL = `${API_URL}/todos`;

export const getTodos = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}