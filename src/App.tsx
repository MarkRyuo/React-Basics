import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {

  const Text = {

    Logo1: {
      logoName: "Moda"
    },

    Card1 : {
      cardTitle: "React1"
    },

    Card2 : {
      cardTitle: "React2"
    },

    Card3: {
      cardTitle: "React3"
    }
  }

  
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <Navbar {...Text.Logo1} />
        </div>

        <div className="row">
          <div className="col">
            <Card />
          </div>

          <div className="col">
            <Card />
          </div>

          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;