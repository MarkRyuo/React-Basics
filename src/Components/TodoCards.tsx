

interface childs {
    
}


export default function TodoCards(props) {

    const {children} = props

    return (
        <>
            <li className="todoItem">
                {children}
                <div className="actionContainer">
                    <div className="btn-icons">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                    </div>
                </div>

            </li>
        </>
    ) ;
}