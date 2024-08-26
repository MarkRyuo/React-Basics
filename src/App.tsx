// import Conditional from "./Components/conditional";
// import ListGroup from "./Components/List_Group";

// import HandlingEvents from "./Components/Handling_events";
import Card from "./Components/card";

//* Spread Operator : {...}

function App() {

  const Users = {
    
    user1: {
      cardName: "Moda",
      description: "Moda is real"
    },

    user2: {
      cardName: "Niyari",
      description: "Niyari the light of the dark"
    },

    user3: {
      cardName: "Riyuo",
      description: "The only one can do!"
    }
  }

  return (

    <>
      <div className="container-lg">
        <div className="row g-1">
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user1}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user2}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user3}/></div>
            </div>
        </div>
      </div>
    </>

  ) ;
}

export default App ;