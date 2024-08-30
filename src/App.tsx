import Cards from "./Components/Cards";

// * The container is the main body

const App = () => {
    const Text = {
        Card1: {
            CardImg: "/src/assets/Card1.jpg",
            CardTitle: "Basic",
            CardDiscr: "$100",
            CardBtn: "Buy",
    },

        Card2: {
            CardImg: "/src/assets/Card2.jpg",
            CardTitle: "Premium",
            CardDiscr: "$700",
            CardBtn: "Credit",
    },

        Card3: {
            CardImg: "/src/assets/Card3.jpg",
            CardTitle: "Standard",
            CardDiscr: "$400",
            CardBtn: "Credit",
    },
};

    return (
        <>
            <div className="container-lg mt-4">
                <div className="row text-center justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-3">
                    <Cards {...Text.Card1} />
                </div>
                <div className="col-12 col-md-3 col-lg-5">
                    <Cards {...Text.Card2} />
                </div>
                <div className="col-12 col-md-3 col-lg-4">
                    <Cards {...Text.Card3} />
                </div>
                </div>
            </div>
        </>
  );
};

export default App;
