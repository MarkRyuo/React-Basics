

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

            <div className="card" >
                <img src={props.CardImg} className="class-img-top" alt="Error Img" />
                <div className="card-body" >
                    <p className="h1">{props.CardTitle}</p>
                    <p className="lead">{props.CardDiscr}</p>
                    <button className="btn btn-success">{props.CardBtn}</button>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;