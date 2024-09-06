

export default function TodoList() {
    const todos = [
        'Take a Nap!',
        'Take a Walk',
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
