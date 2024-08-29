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
      <div>
        <Cards {...Text.Card1}/>
      </div>
    </>
  );
}

export default App ;