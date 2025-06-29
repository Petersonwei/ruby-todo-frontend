import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api';
const GET_URL = `${API_URL}/todos`;
const POST_URL = `${API_URL}/todos`;
const DELETE_URL = (id) => `${API_URL}/todos/${id}`;
const PATCH_URL = (id) => `${API_URL}/todos/${id}/update_completed`;

export const get_todos = async () => {
    const response = await axios.get(GET_URL);
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}

export const create_todo = async (todo_name) => {
    const response = await axios.post(POST_URL, { todo: { 'todo_name': todo_name, 'completed': false } });
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}

export const delete_todo = async (id) => {
    const response = await axios.delete(`${DELETE_URL(id)}`);
    // response.data is a property provided by Axios, which contains the data payload from the server's response.
    return response.data;
}

export const update_todo = async (id, completed) => {
    const response = await axios.patch(`${PATCH_URL(id)}`, { 'completed': completed });
    return response.data;
}