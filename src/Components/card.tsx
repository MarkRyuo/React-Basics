

interface Cardsprops {
    CardTitle : string ;
}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div>
                <div>
                    <p className="h1">{props.CardTitle}</p>
                    <button type="button" className=""></button>
                </div>
            </div>

        </>
    ) ;

}

export default Cards ;