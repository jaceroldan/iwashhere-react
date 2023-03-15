import '../styles/menu.css';

function Menu() {
    return (
        <div class="main-menu">
            <div class="main-menu-options">
                <ul>
                    <a href="{% url 'inventory:new' %}"><li>New Order</li></a>
                    <a href="{% url 'inventory:list-orders' %}"><li>All Orders</li></a>
                    <a href="{% url 'inventory:list-customers' %}"><li>Customers</li></a>
                    <a href="{% url 'inventory:list-orders-unclaimed' %}"><li>To Claim</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
