

interface Cardsprops {
    CardTitle : string ;
}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div>
                <div>
                    <p className="h1">{props.CardTitle}</p>
                </div>
            </div>

        </>
    ) ;

}

export default Cards ;