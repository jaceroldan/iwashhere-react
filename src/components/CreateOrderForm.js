import '../styles/create_order_form.css';

function CreateOrderForm() {
    return (
        <div className="receipt">
            <div className="logo">
                <h1>I Wash Here</h1>
            </div>
            <form action="{% url 'inventory:create' %}" method="post">
                <div className="main-fields">
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="existingCustomer" />
                                <label className="form-check-label" for="existingCustomer">Existing customer</label>
                            </div>
                            <div id="new-customer-fields">
                                <div className="field mb-3">
                                    <label className="form-label" for="customer">First Name</label>
                                    <input className="form-control form-control-sm" type="text" name="first_name" id="customer" />
                                </div>
                                <div className="field mb-3">
                                    <label className="form-label" for="customer">Last Name</label>
                                    <input className="form-control form-control-sm" type="text" name="last_name" id="customer" />
                                </div>
                                <div className="field mb-3">
                                    <label className="form-label" for="contact_number">Tel. No.: </label>
                                    <input className="form-control form-control-sm" type="tel" name="contact_number" id="contact_number" />
                                </div>
                            </div>
                            <div id="existing-customer-fields" style={{ display: 'none' }}>
                                <label for="customer-list" className="form-label">Existing Customer</label>
                                <input className="form-control" list="datalist-options" id="customer-list" placeholder="Type to search customer..." name="existing_customer" />
                                <datalist id="datalist-options">

                                </datalist>
                            </div>
                            <div className="field mb-3">
                                <label className="form-label" for="weight">Weight: </label>
                                <input className="form-control form-control-sm" type="text" name="weight" id="weight" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 field">
                                <label className="form-label" for="date_created">Date: </label>
                                <input className="form-control form-control-sm" type="date" name="date_created" id="date_created" disabled />
                            </div>
                            <div className="mb-3 field">
                                <label className="form-label" for="remarks">Service Offered</label>
                                <textarea className="form-control" id="remarks" rows="3" name="remarks"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                    <hr />
                    <div className="table-container">
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
                                    <td><input type="number" name="service_cost" value="0" /></td>
                                </tr>
                                <tr>
                                    <th>Detergent</th>
                                    <td><input type="number" name="detergent_cost" value="0" /></td>
                                </tr>
                                <tr>
                                    <th>Fab Con</th>
                                    <td><input type="number" name="fabcon_cost" value="0" /></td>
                                </tr>
                                <tr>
                                    <th>Bleach</th>
                                    <td><input type="number" name="bleach_cost" value="0" /></td>
                                </tr>
                                <tr>
                                    <th>Plastic</th>
                                    <td><input type="number" name="plastic_cost" value="0" /></td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td id="total"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label" for="date_required">Date/Time Required</label>
                            <input className="form-control form-control-sm" type="date" name="date_required" id="date_required" />
                            <input className="form-control form-control-sm" type="time" name="time_required" id="time_required" />
                        </div>
                    </div>
                </div>
                <div className="row submit-row">
                    <div className="col">
                        <input type="submit" className="btn btn-success" value="Create" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateOrderForm;
