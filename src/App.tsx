import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {

  const Text = {

    Logo1: {
      logoName: "Moda"
    },

    Card1 : {
      
    }
  }

  
  return (
    <>
      <div className="container">
        <div className="">
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