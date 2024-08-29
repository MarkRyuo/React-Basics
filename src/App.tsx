import Cards from './Components/card';

// * The container is the main body 

function App() {

  const Text = {

    Card1 : {
      CardTitle : "Moda",
      buttonText: "Watch Video"
    }, 

    

    
  }

  
  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <div className='col'>

          </div>
        </div>
        <Cards {...Text.Card1}/>
      </div>
    </>
  );
}

export default App ;