

//* Props - Lets you send data from one components to another 
//* Use props to make this values dynamic and changeable 


function Card(props){
    const username = "Moda"


    return (
        <>
            <div className="card" style={{width: "10rem;"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
export default Card ;