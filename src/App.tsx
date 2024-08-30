import Cards from './Componets/Cards'

// * The container is the main body 

const App = () => {

  const Text = {
    Card1: {
      CardImg: "",
      CardTitle: "",
      CardDiscr: "",
      CardBtn: "",
    },

    Card2: {
      CardImg: "",
      CardTitle: "",
      CardDiscr: "",
      CardBtn: "",
    },

    Card3: {
      CardImg: "",
      CardTitle: "",
      CardDiscr: "",
      CardBtn: "",
    },
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-5">
            <Cards />
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <Cards />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;