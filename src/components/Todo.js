import { LuDelete } from "react-icons/lu";


const Todo = ({ todo_name }) => {
    return (
        <div className="todo">
            <div className="todo-container">
                <input type="checkbox" />
                <h3>{todo_name}</h3>
                <LuDelete size={24} />
            </div>
        </div>
    )
}

export default Todo;