

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
                    <button className=""></button>
                </div>
                <div className="col-12 col-md-4 col-lg-6">
                    <img src={props.CardImg} alt="Error Img" />
                    <p className="h1">{props.CardTitle}</p>
                    <p className="lead">{props.CardDiscr}</p>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <img src={props.CardImg} alt="Error Img" />
                    <p className="h1">{props.CardTitle}</p>
                    <p className="lead">{props.CardDiscr}</p>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;