

export default function TodoList() {
    const todos = [
        'Hi',
        'Hello',
        'World'
    ]
    
    return (
        <ul>

            {todos.map((todoo, todoIndex) => {

                return (
                    <h1 key={todoIndex}>{todoo}</h1>
                )
            })}
    
        </ul>
    ) ;
}
