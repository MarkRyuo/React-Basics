
const Navbar = () => {


    return (

        <>
            <ul
                className="nav nav-tabs"
                id="navId"
                role="tablist"
            >
                <li className="nav-item">
                    <a
                        href="#tab1Id"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-current="page"
                        >Active</a
                    >
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Dropdown</a
                    >
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#tab2Id">Action</a>
                        <a className="dropdown-item" href="#tab3Id">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#tab4Id">Action</a>
                    </div>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tab5Id" class="nav-link" data-bs-toggle="tab"
                        >Another link</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#" class="nav-link disabled" data-bs-toggle="tab"
                        >Disabled</a
                    >
                </li>
            </ul>
            
            <!-- Tab panes -->
            < class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="tab1Id" role="tabpanel">
                    
                </div>
                <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
                <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
                <d class="tab-pane fade" id="tab5Id" role="tabpanel"></      <!-- (Optional) - Place this js code after initializing bootstrap.min.js or bootstrap.bundle.min.js -->
            <script>
                var triggerEl = document.querySelector("#navId a");
          Name      bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name
            </script>
            
        </>
    ) ;Name
NameclassName
NameclassName}
NameclassName
export default NameNavbar ;NameclassNNameclassNameame