

export default function TodoList() {
    const todos = [
        'Take a Nap!',
        'Take a Walk',
        'Talk a Bath'
    ]
    
    return (
        <ul className="mainTodo">

            {todos.map((todoo, todoIndex) => {

                return (
                    <li key={todoIndex}>
                        {todoo}
                        <button type="button"><i className="fa-solid fa-pen-to-square"></i></button>
                    </li>
                );
            })}
    
        </ul>
    ) ;
}
