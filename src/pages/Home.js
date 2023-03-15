

function Home() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="{% url 'inventory:menu' %}">I Wash Here</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="{% url 'inventory:list-orders' %}">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{% url 'inventory:list-customers' %}">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{% url 'inventory:list-orders-unclaimed' %}">To Claim</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success"><a className="nav-link" href="{% url 'inventory:new' %}">New</a></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Home;
