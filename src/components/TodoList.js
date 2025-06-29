import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div className="todo-list">
            {
                todos.map((todo) => (
                    <Todo key={todo.id} id={todo.id} todo_name={todo.todo_name} deleteTodo={deleteTodo} />
                ))
            }
        </div>
    )
}

export default TodoList;