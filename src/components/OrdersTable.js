import '../styles/orders_table.css';

function OrdersTable() {
    return (
        <div className="data-table container container-fluid">
            <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col-sm-8">
                    <h1>Orders Masterlist</h1>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-success" id="create">Create</button>
                </div>
                <div className="col-sm-3">
                    <div className="form-inline my-2 my-lg-0" style={{ display: 'flex', flexDirection: 'row' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" list="datalist-options" aria-label="Search" style={{ width: '60%' }} name="search_key" id="search_key" />
                        {/* TODO: Dynamic listing */}
                        <datalist id="datalist-options">
                        </datalist>
                        <button className="btn btn-outline-success my-2 my-sm-0" id="search">Search</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                        <th>Control No.</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Weight</th>
                        <th>Service Cost</th>
                        <th>Detergent</th>
                        <th>Fabcon</th>
                        <th>Bleach</th>
                        <th>Plastic</th>
                        <th>Total Amount</th>
                        <th>Remarks</th>
                        <th>Date Required</th>
                        <th>Time Required</th>
                        <th>Date Claimed</th>
                        <th>Time Claimed</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* TODO: Dynamic data */}
                <tbody>
                    <tr>
                        {/* <td>{{ order.pk }}</td>
                        <td>{{ order.date_created }}</td>
                        <td>{{ order.customer }}</td>
                        <td>{{ order.weight }}</td>
                        <td>{{ order.service_cost }}</td>
                        <td>{{ order.detergent_cost }}</td>
                        <td>{{ order.fabcon_cost }}</td>
                        <td>{{ order.bleach_cost }}</td>
                        <td>{{ order.plastic_cost }}</td>
                        <td>{{ order.total_cost }}</td>
                        <td>{{ order.remarks }}</td>
                        <td>{{ order.date_required|date:"N d, Y" }}</td>
                        <td>{{ order.date_required|time:"h:i" }}</td>
                        <td>{{ order.date_claimed|date:"N d, Y" }}</td>
                        <td>{{ order.date_claimed|time:"h:i" }}</td>
                        <td>{{ order.payment_made }}</td>
                        <td><button className="btn btn-primary" ><a href="{% url 'inventory:view' order.pk %} ">Open</a></button></td> */}
                        <script>

                        </script>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Orders navigation">
                <ul className="pagination justify-content-center"></ul>
            </nav>
        </div>
    );
}

export default OrdersTable;
