

interface Cardsprops {
    CardTitle: string ;
    button: string ;
}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div>
                <div>
                    <p className="h1">{props.CardTitle}</p>
                    <button type="button" className="btn btn-success"></button>
                </div>
            </div>

        </>
    ) ;

}

export default Cards ;