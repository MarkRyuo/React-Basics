import React, {useState} from "react";


//* Usestate hook - 

function Cardcounter() {

    const Increment = () =>  {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }
    const [count, setCount] = useState(0) ;

    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                    <h1 className="card-title">
                    Counter
                    </h1>
                    <div className="card-text">
                    <p>Count: {count}</p>
                    <button type="button" className="btn btn-success" onClick={Increment}>Increase</button>
                    <button type="button" className="btn btn-warning">Decrease</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcounter ;