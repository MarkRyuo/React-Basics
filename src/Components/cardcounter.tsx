import React, {useState} from "react";


//* Usestate hook - 

function Cardcounter() {


    

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                    <h1 className="card-title">
                    Counter
                    </h1>
                    <div className="card-text">
                    <p>Count: 0</p>
                    <button type="button" className="btn btn-success">Increase</button>
                    <button type="button" className="btn btn-warning">Decrease</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcounter ;