import { LuDelete } from "react-icons/lu";


const Todo = ({ id, todo_name, deleteTodo }) => {

    const handleDelete = () => {
        deleteTodo(id);
    }

    return (
        <div className="todo">
            <div className="todo-container">
                <input type="checkbox" />
                <h3>{todo_name}</h3>
                <LuDelete onClick={handleDelete} size={24} />
            </div>
        </div>
    )
}

export default Todo;