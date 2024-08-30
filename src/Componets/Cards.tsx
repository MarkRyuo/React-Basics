

//* Image , Title, description, button 


interface Cardsprops {
    CardImg: string ;
    CardTitle: string ;
    CardDiscr : string ;
    CardBtn : string ;
}


const Cards = (props : Cardsprops ) => {

    //* Row 
    //* Col 

    return (

        <>

            <div className="row">
                <div className="col">
                    <img src="" alt="Error Img" />
                    <p className="h1"></p>
                    <p className="lead"></p>
                </div>
                <div className="col">
                    <img src="" alt="Error Img" />
                    <p className="h1"></p>
                    <p className="lead"></p>
                </div>
                <div className="col">
                    <img src="" alt="Error Img" />
                    <p className="h1"></p>
                    <p className="lead"></p>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;