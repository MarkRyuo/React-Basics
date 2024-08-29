

interface Cardsprops {
    CardTitle : string ;
}

const Cards = (props : Cardsprops) => {

    return (
        <>

            <div>
                <div>
                    
                </div>
                <p className="h1">{props.CardTitle}</p>
            </div>

        </>
    ) ;

}

export default Cards ;