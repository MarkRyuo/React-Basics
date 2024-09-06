

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
                    <div>

                        <li key={todoIndex}>
                            
                        </li>

                    </div>
                    
                );
            })}
    
        </ul>
    ) ;
}
