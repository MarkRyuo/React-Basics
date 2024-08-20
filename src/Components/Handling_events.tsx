


function HandlingEvents () {

    const listofCitys =  [
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
                    {listofCitys.map((citys) => <li className="list-group-item">{citys}</li>)}
                </ul>
            </div>
        
        </>

    ) ;
}


export default HandlingEvents ;