import { LuDelete } from "react-icons/lu";

import { update_todo } from '../api/endpoints';


const Todo = ({ id, todo_name, deleteTodo, completed }) => {

    const handleDelete = async () => {
        deleteTodo(id);
    }

    const handleComplete = async () => {
        await update_todo(id, !completed);
    }

    return (
        <div className="todo">
            <div className="todo-container">
                <input type="checkbox" checked={completed} onChange={handleComplete} />
                <h3>{todo_name}</h3>
                <LuDelete onClick={handleDelete} size={24} />
            </div>
        </div>
    )
}

export default Todo;