
//* Props - Lets you send data from one components to another 
//* Use props to make this values dynamic and changeable 


function Card(props){
    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <img src="..." className="card-img-top" alt="Error image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardName}</h5> 
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
export default Card ;