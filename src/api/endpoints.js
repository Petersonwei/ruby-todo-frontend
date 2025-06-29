import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api';
const GET_URL = `${API_URL}/todos`;
const POST_URL = `${API_URL}/todos`;

export const getTodos = async () => {
    const response = await axios.get(GET_URL);
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}

export const createTodo = async (todo_name) => {
    const response = await axios.post(POST_URL, { todo: { 'todo_name': todo_name, 'completed': false } });
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${POST_URL}/${id}`);
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}