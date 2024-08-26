// import Conditional from "./Components/conditional";
// import ListGroup from "./Components/List_Group";

// import HandlingEvents from "./Components/Handling_events";
import Card from "./Components/card";


function App() {

  const Users = {
    
    user1: {
      cardName: "Moda"
      description: "Moda is real"
    }
  }

  return (

    <>
      <div className="container-lg">
        <div className="row g-1">
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Moda"} description={"Moda is real"}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Niyari"} description={"Moda is real"}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card cardName={"Riyuo"} description={"Moda is real"}/></div>
            </div>
        </div>
      </div>
    </>

  ) ;
}

export default App ;