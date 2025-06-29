import { LuDelete } from "react-icons/lu";


const Todo = () => {
    return (
        <div className="todo">
            <div className="todo-container">
                <input type="checkbox" />
                <p>Todo 1</p>
                <LuDelete size={24} />
            </div>
        </div>
    )
}

export default Todo;