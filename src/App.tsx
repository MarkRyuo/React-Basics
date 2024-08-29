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
      CardTitle: "Riyuo",
      buttonText: "Watch Video",
      imageSrc: "/src/assets/download (4).jpg",
    },

    Card3: {
      CardTitle: "Riyuo",
      buttonText: "Watch Video",
      imageSrc: "/src/assets/download (4).jpg",
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
            <Cards {...Text.Card2} />
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