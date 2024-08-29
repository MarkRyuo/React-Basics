import Cards from './Components/card';

// * The container is the main body 

function App() {

  const Text = {
    Card1: {
      CardTitle: "Moda",
      buttonText: "Watch Video",
      imageSrc: "/src/assets/girldenji.jpg",
    },

    Card2: {
      CardTitle: "Moda",
      buttonText: "Watch Video",
      imageSrc: "",
    },
  };

  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-4">
            <Cards {...Text.Card1} />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Cards {...Text.Card1} />
          </div>

          <div className="col-12 col-md-3 col-lg-4">
            <Cards {...Text.Card1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;