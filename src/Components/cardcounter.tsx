
function Cardcounter() {

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                    <div className="card-title">
                    Counter
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