import { Link } from "react-router-dom";

function Home() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">I Wash Here</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="customers">Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="orders/?unclaimed=true">To Claim</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success"><Link className="nav-link" to="orders/new">New</Link></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Home;
