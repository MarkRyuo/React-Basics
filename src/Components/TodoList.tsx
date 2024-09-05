

export default function TodoList() {
    const todos = [
        'Hi',
        'Hello',
        'World'
    ]
    
    return (
        <ul className="main">

            {todos.map((todoo, todoIndex) => {

                return (
                    <li key={todoIndex}>{todoo}</li>
                )
            })}
    
        </ul>
    ) ;
}
