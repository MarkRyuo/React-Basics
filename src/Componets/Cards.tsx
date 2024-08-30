

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
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        
        </>
    ) ;
}

export default Cards ;