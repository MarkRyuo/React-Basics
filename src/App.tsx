import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {

  const Text = {

    Logo1: {
      logoName: "Moda"
    },

    Card1 : {
      cardTitle: "React 1",
      cardDiscription: "React 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, debitis."
    },

    Card2 : {
      cardTitle: "React 2"
    },

    Card3: {
      cardTitle: "React 3"
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
            <Card {...Text.Card1}/>
          </div>

          <div className="col">
            <Card {...Text.Card2}/>
          </div>

          <div className="col">
            <Card {...Text.Card3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;