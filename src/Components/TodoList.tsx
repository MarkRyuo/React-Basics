

export default function TodoList() {
    let todos = [
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
