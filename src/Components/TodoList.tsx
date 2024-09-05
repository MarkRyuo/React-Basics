

export default function TodoList() {
    const todos = [
        'Hi',
        'Hello',
        'World'
    ]
    
    return (
        <ul>

            {todos.map((todoo) => {

                return <h1>{todoo}</h1>
            })}
    
        </ul>
    ) ;
}
