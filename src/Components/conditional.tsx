

function Conditional() {

    const age= 19 ;

    // const GetAge = age >= 20 ? <p>GREATER</p> : <p>LOWER</p> ;  {/* This is a Ternary operator*/}

    const GettheAge = () => {
        return age >= 20 ? <p>GREATER</p> : <p>LOWER</p>;
    }
    
    return (
        <>      

            <h1>{GetAge}</h1>

            <h1>{GettheAge()}</h1> {/* Functional */}
        </>
    ) ;
}



export default Conditional ;