import '../styles/view_order.css';
import { Link } from 'react-router-dom';

function ViewOrder() {
    const order = { id: 1 };
    return (
        <div className="receipt">
            <div className="logo">
                <h1>I Wash Here</h1>
            </div>
            <div className="main-fields">
                <div className="row">
                    <div className="col">
                        <div className="field">
                            <label for="customer"><b>Customer:</b></label>
                            {/* {{ order.customer.first_name }} */}
                        </div>
                        <div className="field">
                            <label for="contact_number"><b>Tel. No.: </b></label>
                            {/* {{ order.customer.contact_number }} */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="field">
                            <label for="date_created"><b>Date: </b></label>
                            {/* {{ order.date_created }} */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="field">
                            <label for="weight"><b>Weight: </b></label>
                            {/* {{ order.weight }} */}
                        </div>
                    </div>
                </div>
                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Service Cost</th>
                            {/* <td>{{ order.service_cost }}</td> */}
                        </tr>
                        <tr>
                            <th>Detergent</th>
                            {/* <td>{{ order.detergent_cost }}</td> */}
                        </tr>
                        <tr>
                            <th>Fab Con</th>
                            {/* <td>{{ order.fabcon_cost }}</td> */}
                        </tr>
                        <tr>
                            <th>Bleach</th>
                            {/* <td>{{ order.bleach_cost }}</td> */}
                        </tr>
                        <tr>
                            <th>Plastic</th>
                            {/* <td>{{ order.plastic_cost }}</td> */}
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col">
                        <label for="total">Total:</label>
                        {/* <p><b>PHP {{ order.total_cost }}</b></p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="date_required">Date/Time Required</label>
                        {/* <p>{{ order.date_required }}</p> */}
                    </div>
                </div>
            </div>
            <div className="row" id="payment-input" style="display: none;">
                <form action="{% url 'inventory:mark-paid' order.pk %}" method="post">
                    <div className="col">
                        <label for="payment_amount">
                            Payment Amount
                        </label>
                        <input type="number" className="form-control" name="payment_amount" />
                    </div>
                    <div className="col">
                        <p>Payment options</p>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="payment_option" id="payment_option_cash" value="1" />
                            <label for="payment_option_cash" className="form-check-label">
                                Cash
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="payment_option" id="payment_option_gcash" value="2" />
                            <label for="payment_option_gcash" className="form-check-label">
                                GCash
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">Set</button>
                    </div>
                </form>
            </div>
            <br /><br />
            <div className="row">
                <div className="col">
                    <button className="btn btn-warning"><Link to={"/orders/edit/" + order.id}>Edit</Link></button>
                    <button className="btn btn-secondary" id="print">Print</button>
                    <button className="btn btn-success" id="mark-paid">Mark as Paid</button>
                    <button className="btn btn-success" id="mark-claimed">Mark as Claimed</button>
                </div>
            </div>
        </div>
    );
}

export default ViewOrder;
