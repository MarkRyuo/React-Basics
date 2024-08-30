

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
                <img src={props.CardImg} className="class-img-top" alt="Error Img"/>
                <div className="card-body" >
                    <h4 className="card-title">{props.CardTitle}</h4>
                    <h5 className="cart-text">{props.CardDiscr}</h5>
                    <button className="btn btn-primary">{props.CardBtn}</button>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;