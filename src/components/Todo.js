import { LuDelete } from "react-icons/lu";

import { update_todo } from '../api/endpoints';

import { useState } from 'react';


const Todo = ({ id, todo_name, deleteTodo, completed }) => {

    const [isChecked, setIsChecked] = useState(completed);
    
    const handleDelete = async () => {
        deleteTodo(id);
    }

    const handleComplete = async () => {
        await update_todo(id, !isChecked);
        setIsChecked(!isChecked);
    }

    return (
        <div className="todo">
            <div className="todo-container">
                {/* Use 'checked' to control the checkbox state directly with the component's state (isChecked) 
                    rather than using 'completed' from props, which might not reflect the current state after updates. */}
                <input type="checkbox" checked={isChecked} onChange={handleComplete} />
                <h3>{todo_name}</h3>
                <LuDelete onClick={handleDelete} size={24} />
            </div>
        </div>
    )
}

export default Todo;