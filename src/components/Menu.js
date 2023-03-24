import '../styles/menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="main-menu">
            <div className="main-menu-options">
                <ul>
                    <li>
                        <Link to="orders/new">New Order</Link>
                    </li>
                    <li>
                        <Link to="orders">All Orders</Link>
                    </li>
                    <li>
                        <Link to="customers">Customers</Link>
                    </li>
                    <li>
                        <Link to="orders/?unclaimed=true">To Claim</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
