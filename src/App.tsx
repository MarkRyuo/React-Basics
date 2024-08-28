

function App() {

  return (

    <>
      <div className="container-lg">
        <div className="row g-1">
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user1}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user2}/></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div><Card {...Users.user3}/></div>
            </div>
        </div>

        <div>
          <Cardcounter/>
        </div>
      </div>
    </>

  ) ;
}

export default App ;