import Navbar from "./Components/Navbar";


// * The container is the main body 

function App() {

  const Logos = {

    logo1: {
      LogoName: "Moda"
    },
  }

  
  return (
    <>
      <div className="container"> 
        <Navbar {...Logos.logo1}/>
      </div>
    </>
  );
}

export default App ;