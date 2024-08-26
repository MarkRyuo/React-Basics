
function Cardcounter(props) {

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                    <div className="card-title">
                    {props.cardTitle}
                    </div>
                    <div className="card-text">
                    {props.cardText}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcounter ;