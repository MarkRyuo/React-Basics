

//* Use props to change 

interface Navbarprops {
    logoName : string ;
}


function Navbar(props: Navbarprops) {
    

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/react.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        {props.logoName}
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar ;