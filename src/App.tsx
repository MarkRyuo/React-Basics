

// * The container is the main body

import TodoCards from "./Components/TodoCards";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {


    return (
        <main>

            <TodoCards/>
            <TodoList/>
            <TodoInput/>

        </main>
    );
};

export default App;
