

export default function TodoList() {
    const todos = [
        'Take a nap!',
        'Hello',
        'World'
    ]
    
    return (
        <ul className="mainTodo">

            {todos.map((todoo, todoIndex) => {

                return (
                    <li key={todoIndex}>
                        {todoo}
                        <i className="fa-solid fa-pen-to-square"></i>
                    </li>
                );
            })}
    
        </ul>
    ) ;
}
