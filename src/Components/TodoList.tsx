

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
                            <div className="">
                                {todoo}
                            </div>

                            <div className="">
                                <button type="button" onClick={() => {}}><i className="fa-solid fa-pen-to-square"></i></button>
                            </div>
                        </li>

                    </div>
                    
                );
            })}
    
        </ul>
    ) ;
}
