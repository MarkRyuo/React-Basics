


// * Card Component 

interface Cardprops {
    cardTitle: string ;
    cardDiscription: string ;
}

function Card(props: Cardprops) {
    
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src="/src/assets/react.svg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    ) ;
}



export default Card ;