


function ListGroup() {

    {
        // * Use Curly Braces to comments
    }

    const listofNames = ["Riyuo", "Niyari","Sopheya","Jilan" ] ; 

    {
        // * Map method : How it works? listofNames.map(parameter => <p>{parameter}</p>)
    }

    listofNames.map(names => <p>{names}</p>)



    return (
        <>
            <div className="container-lg">
            <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">
                    A disabled item
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
            </div>
        </>
    );
}

export default ListGroup ;