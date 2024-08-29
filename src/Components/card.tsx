

interface Cardsprops {
    CardTitle: string ;
    buttonText: string ;
}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div className="container-lg">
                <div className="m-3 p-2" style={{border: "solid red"}}>
                    <div>
                        <p className="h1">{props.CardTitle}</p>
                        <button type="button" className="btn btn-success">{props.buttonText}</button>
                    </div>
                </div>
            </div>

        </>
    ) ;

}

export default Cards ;