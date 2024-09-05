

export default function TodoList() {
    const todos = [
        'Hi',
        'Hello',
        'World'
    ]
    
    return (
        <ul>

            {todos.map((todoo, todolists) => {

                return <h1 key={todolists}>{todoo}</h1>
            })}
    
        </ul>
    ) ;
}
