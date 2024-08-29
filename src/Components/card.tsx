

interface Cardsprops {
    CardTitle: string ;
    buttonText: string ;
}

const Cards = (props : Cardsprops) => {

    

    return (
        <>

            <div className="container-lg">
                <div className="m-3 p-2" style={{border: "solid red"}}>
                    <div className="" style={{border: "solid red"}}>
                        <img src="{props.Image}" alt="Image Only" style={{width: "12rem"}}/>
                        <p className="h1 mb-4">{props.CardTitle}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus veritatis quasi id velit magni quod quam nisi quae molestias.</p>
                        <button type="button" className="btn btn-success">{props.buttonText}</button>
                    </div>
                </div>
            </div>

        </>
    ) ;

}

export default Cards ;