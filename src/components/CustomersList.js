import '../styles/customers_list.css';

function CustomersList() {
    return (
        <div class="container container-fluid">
            <h1>Customers Masterlist</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Control No.</th>
                        <th>Customer</th>
                        <th>Contact Number</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {% for customer in customers %}
                    <tr>
                        <td>{{ customer.pk }}</td>
                        <td>{{ customer.first_name }}</td>
                        <td>{{ custumer.contact_number }}</td>
                        <td>{{ order.date_created }}</td>
                    </tr>
                    {% endfor %} */}
                </tbody>
            </table>
        </div>
    );
}

export default CustomersList;
