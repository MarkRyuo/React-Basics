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
      cardTitle: "React 2",
      cardDiscription: "React 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi cum praesentium, suscipit minima eligendi."
    },

    Card3: {
      cardTitle: "React 3",
      cardDiscription: "React 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos aperiam commodi eaque ab totam labore"
    }
  }

  
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <Navbar {...Text.Logo1} />
        </div>

        <div className="row text-center">
          <div className="col-6 col-md-3">
            <Card {...Text.Card1}/>
          </div>

          <div className="col-6 g-col-md-3">
            <Card {...Text.Card2}/>
          </div>

          <div className="col-6 g-col-md-3">
            <Card {...Text.Card3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;