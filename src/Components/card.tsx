
interface Cardsprops {

}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div>
                <p className="h1">{props.CardTitle}</p>
            </div>

        </>
    ) ;

}

export default Cards ;