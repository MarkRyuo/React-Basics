import Cards from './Componets/Cards'

// * The container is the main body 

const App = () => {

  const Text = {
    Card1: {
      CardImg: "/src/assets/Card1.jpg",
      CardTitle: "Normal",
      CardDiscr: "$0",
      CardBtn: "Buy",
    },

    Card2: {
      CardImg: "/src/assets/Card2.jpg",
      CardTitle: "Super Premium",
      CardDiscr: "$600",
      CardBtn: "Credit",
    },

    Card3: {
      CardImg: "/src/assets/Card3.jpg",
      CardTitle: "Premium",
      CardDiscr: "$200",
      CardBtn: "Credit",
    },
  };


  return (
    <>
      <div className="container-xl">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-3">
            <Cards {...Text.Card1}/>
          </div>
          <div className="col-12 col-md-3 col-lg-6">
            <Cards {...Text.Card2}/>
          </div>
          <div className="col-12 col-md-3 col-lg-3">
            <Cards {...Text.Card3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App ;