

function Conditional() {

    const age= 19 ;

    const GetAge = age >= 20 ? <p>GREATER</p> : <p>LOWER</p> ;  {/* This is a Ternary operator*/}

    const GettheAge = () => {
        
    }
    
    return (
        <>
            <h1>{GetAge}</h1>
        </>
    ) ;
}



export default Conditional ;