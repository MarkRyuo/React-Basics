import Cards from './Componets/Cards'

// * The container is the main body 

const App = () => {

  const Text = {
    Card1: {
      CardImg: "/src/assets/Card1.jpg",
      CardTitle: "Premium",
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
            <Cards {...Text.Card1}/>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <Cards {...Text.Card2}/>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <Cards {...Text.Card3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;