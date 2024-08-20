


function HandlingEvents () {

    const listofCity =  [
        "Lipa City",
        "San Juan",
        "Batangas City",
        "Quezon City"
    ]

    
    return (

        <>

            <div className="container-lg">
                <ul className="list-group">
                    <p className="h1">List of City's</p>
                    {listofCity.map((city) => <li className="list-group-item" key={city}>{city}</li>)} {/* I use map method here */}
                </ul>
            </div>
        
        </>

    ) ;
}


export default HandlingEvents ;