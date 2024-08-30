

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
                <div className="col-12 col-md-4 col-lg-3">
                    <img src={props.CardImg} alt="Error Img" />
                    <p className="h1">{props.CardTitle}</p>
                    <p className="lead">{props.CardDiscr}</p>
                    <button className="btn btn-success"></button>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;