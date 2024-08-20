
function ListGroup() {

        // * Use Curly Braces to inside jsx comments { // comment }

    const listofNames = [
        "Riyuo", 
        "Niyari",
        "Sopheya",
        "Jilan" 
    ] ; 
            
    // * Map method : How it works? listofNames.map(parameter => <p>{parameter}</p>)

    // * Using Method for displaying list 
    const getMessage = () => {
        return listofNames.map((names) => (
            <li className="list-group-item">{names}</li>
        )) ;
    }

    return (
        <>
            <div className="container-lg">
                <ul className="list-group">
                    <p className="h1">List Group</p>
                    <li className="list-group-item disabled" aria-disabled="true"> A disabled item </li>

                    {listofNames.map((names) => <li className="list-group-item">{names}</li>)}  {/* Clean map method inside jsx */} 

                    {getMessage()}


                </ul>
            </div>
        </>
    );
}



export default ListGroup ; 