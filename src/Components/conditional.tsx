

function Conditional() {

    const age= 19 ;
    
    const GetAge = age >= 20 ? <p>GREATER Normal</p> : <p>LOWER Normal</p> ;  {/* This is a Ternary operator*/}

    // * Arrow Function 
    const GettheAge = () => {
        return age >= 20 ? <p>GREATER Functional</p> : <p>LOWER Functional</p>;  
    }
    
    return (
        <>      

            <h1>{GetAge}</h1> {/* Normal */}

            <h1>{GettheAge()}</h1> {/* Functional */}
        </>
    ) ;
}



export default Conditional ;