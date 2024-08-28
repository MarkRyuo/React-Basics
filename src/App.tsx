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
            <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App ;