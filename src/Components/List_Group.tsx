


function ListGroup() {

    {
        // * Use Curly Braces to comments
    }

    const listofNames = ["Riyuo", "Niyari","Sopheya","Jilan" ] ; 

    {
        // * Map method : How it works? listofNames.map(parameter => <p>{parameter}</p>)
    }



    return (
        <>
            <div className="container-lg">
            <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">
                    A disabled item
                </li>
                {listofNames.map((names) => <li className="list-group-item">{names}</li>)}
            </ul>
            </div>
        </>
    );
}

export default ListGroup ;