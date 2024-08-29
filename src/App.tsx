import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {


  
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <Navbar {...Text.Logo1} />
        </div>

        <div className="g-2 row justify-content-center">
          <div className="mb-2 col-sm-12 col-md-4">
            <Card {...Text.Card1}/>
          </div>

          <div className="mb-2 col-sm-12 col-md-4">
            <Card {...Text.Card2}/>
          </div>

          <div className="mb-2 col-sm-12 col-md-4">
            <Card {...Text.Card3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;