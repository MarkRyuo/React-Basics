import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {

  const Logos = {

    logo1: {
      logoName: "Moda"
    },
  }

  
  return (
    <>
      <div className="container"> 
        <Navbar {...Logos.logo1}/>

        <div className="row">
            <div className="col"><Card/></div>
        </div>
      </div>
    </>
  );
}

export default App ;