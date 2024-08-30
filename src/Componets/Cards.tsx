

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

            <div className="card" style={{border: "solid red"}} >
                <img src={props.CardImg} className="class-img-top" alt="Error Img"/>
                <div className="card-body" >
                    <p className="card-title">{props.CardTitle}</p>
                    <p className="cart-text">{props.CardDiscr}</p>
                    <button className="btn btn-success">{props.CardBtn}</button>
                </div>
            </div>
        
        </>
    ) ;
}

export default Cards ;