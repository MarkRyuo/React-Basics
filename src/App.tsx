// import Conditional from "./Components/conditional";
// import ListGroup from "./Components/List_Group";

// import HandlingEvents from "./Components/Handling_events";
import Card from "./Components/card";


function App() {

  return (

    <>
      <div className="container-lg">
        <div className="row g-1">
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Moda"} description={"Moda is real"}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Moda"} description={"Moda is real"}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Moda"} description={"Moda is real"}/></div>
            </div>
        </div>
      </div>
    </>

  ) ;
}

export default App ;