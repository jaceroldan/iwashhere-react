import '../styles/edit_order_form.css';

function EditOrderForm () {
    const order = '';

    return (
        <div className="receipt">
            <div className="logo">
                <h1>I Wash Here</h1>
            </div>
            <form action="{% url 'inventory:update' order.pk %}" method="post">
                <div className="main-fields">
                    <div className="row">
                        <div className="col">
                            <div className="field mb-3">
                                <label className="form-label" for="first_name">First Name</label>
                                <input className="form-control form-control-sm" type="text" name="first_name" id="first_name" value="{{ order.customer.first_name }}" />
                            </div>
                            <div className="field mb-3">
                                <label className="form-label" for="last_name">Last Name</label>
                                <input className="form-control form-control-sm" type="text" name="last_name" id="last_name" value="{{ order.customer.last_name }}" />
                            </div>
                            <div className="field mb-3">
                                <label className="form-label" for="contact_number">Tel. No.: </label>
                                <input className="form-control form-control-sm" type="tel" name="contact_number" id="contact_number" value="{{ order.customer.contact_number }}" />
                            </div>
                            <div className="field mb-3">
                                <label className="form-label" for="weight">Weight: </label>
                                <input className="form-control form-control-sm" type="text" name="weight" id="weight" value="{{ order.weight }}" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 field">
                                <label className="form-label" for="date_created">Date: </label>
                                {/* TODO: Dynamic fields. */}
                                <input className="form-control form-control-sm" type="date" name="date_created" id="date_created" value="" disabled />
                            </div>
                            <div className="mb-3 field">
                                <label className="form-label" for="remarks">Service Offered</label>
                                <textarea className="form-control" id="remarks" rows="3" name="remarks">{ order.remarks }</textarea>
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
                                    <td><input type="number" name="service_cost" value="{{ order.service_cost }}" /></td>
                                </tr>
                                <tr>
                                    <th>Detergent</th>
                                    <td><input type="number" name="detergent_cost" value="{{ order.detergent_cost }}" /></td>
                                </tr>
                                <tr>
                                    <th>Fab Con</th>
                                    <td><input type="number" name="fabcon_cost" value="{{ order.fabcon_cost }}" /></td>
                                </tr>
                                <tr>
                                    <th>Bleach</th>
                                    <td><input type="number" name="bleach_cost" value="{{ order.bleach_cost }}" /></td>
                                </tr>
                                <tr>
                                    <th>Plastic</th>
                                    <td><input type="number" name="plastic_cost" value="{{ order.plastic_cost }}" /></td>
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
                            {/* TODO: dynamic fields */}
                            <input className="form-control form-control-sm" type="date" name="date_required" id="date_required" value="" />
                            <input className="form-control form-control-sm" type="time" name="time_required" id="time_required" value="" />
                        </div>
                    </div>
                </div>
                <div className="row submit-row">
                    <div className="col">
                        <input type="submit" className="btn btn-primary" value="Edit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditOrderForm;
