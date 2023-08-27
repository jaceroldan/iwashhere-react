import { useState, useEffect } from 'react';
import '../styles/create_order_form.css';
import { getAllCustomers } from '../services/CustomersService';
import { createOrder } from '../services/OrdersService';

function CreateOrderForm() {
    const [ customers, setCustomers ] = useState([]);

    useEffect(() => {
        window.addEventListener('load', handleCustomers);
        return () => {
            window.removeEventListener('load', handleCustomers);
        }
    }, [customers]);

    const handleCustomers = async () => {
        const result = await getAllCustomers();
        setCustomers(result.results);
    };

    const convertDateToString = (d) => {
        const year = d.getFullYear();
        const month = d.getMonth() + '';
        const date = d.getDate() + '';
        return year + '-' + month.padStart(2, '0') + '-' + date.padStart(2, '0');
    };

    const convertTimeToString = (d) => {
        const hour = d.getHours().toString();
        const minute = d.getMinutes().toString();
        return hour.padStart(2, '0') + ':' + minute.padStart(2, '0');
    }

    const [ isExistingCustomer, setIsExistingCustomer ] = useState(false);
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ contactNumber, setContactNumber ] = useState('');
    const [ weight, setWeight ] = useState(0.0);
    const [ remarks, setRemarks ] = useState('');

    const today = convertDateToString(new Date());
    const [ dateCreated ] = useState(today);
    const [ serviceCost, setServiceCost ] = useState(0.0);
    const [ detergentCost, setDetergentCost ] = useState(0.0);
    const [ fabconCost, setFabconCost ] = useState(0.0);
    const [ bleachCost, setBleachCost ] = useState(0.0);
    const [ plasticCost, setPlasticCost ] = useState(0.0);
    const [ dateRequired, setDateRequired ] = useState(convertDateToString(new Date()));
    const [ timeRequired, setTimeRequired ] = useState(convertTimeToString(new Date()));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            first_name: firstName,
            last_name: lastName,
            contact_number: contactNumber,
            weight: weight,
            remarks: remarks,
            service_cost: serviceCost,
            detergent_cost: detergentCost,
            fabcon_cost: fabconCost,
            bleach_cost: bleachCost,
            plastic_cost: plasticCost,
            date_required: dateRequired + ' ' + timeRequired,
        };
        const response = await createOrder(formData);
        console.log(response);
    };

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
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="existingCustomer"
                                    checked={ isExistingCustomer }
                                    onChange={ e => setIsExistingCustomer(e.target.checked) }
                                />
                                <label className="form-check-label" for="existingCustomer">Existing customer</label>
                            </div>
                            { !isExistingCustomer ? 
                                (<div id="new-customer-fields">
                                    <div className="field mb-3">
                                        <label className="form-label" for="customer">First Name</label>
                                        <input
                                            className="form-control form-control-sm"
                                            type="text"
                                            name="first_name"
                                            id="customer"
                                            value={ firstName }
                                            onChange={ e => setFirstName(e.target.value) }
                                        />
                                    </div>
                                    <div className="field mb-3">
                                        <label className="form-label" for="customer">Last Name</label>
                                        <input
                                            className="form-control form-control-sm"
                                            type="text"
                                            name="last_name"
                                            id="customer"
                                            value={ lastName }
                                            onChange={ e => setLastName(e.target.value) }
                                        />
                                    </div>
                                    <div className="field mb-3">
                                        <label className="form-label" for="contact_number">Tel. No.: </label>
                                        <input
                                            className="form-control form-control-sm"
                                            type="tel"
                                            name="contact_number"
                                            id="contact_number"
                                            value={ contactNumber }
                                            onChange={ e => setContactNumber(e.target.value) }
                                        />
                                    </div>
                                </div>) :
                                (<div id="existing-customer-fields">
                                    <label for="customer-list" className="form-label">Existing Customer</label>
                                    <input className="form-control" list="datalist-options" id="customer-list" placeholder="Type to search customer..." name="existing_customer" />
                                    <datalist id="datalist-options">
                                        {customers?.map((customer) => (
                                            <option>{ customer.first_name } { customer.last_name }</option>
                                        ))}
                                    </datalist>
                                </div>)
                            }
                            <div className="field mb-3">
                                <label className="form-label" for="weight">Weight: </label>
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    value={ weight }
                                    onChange={ e => setWeight(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3 field">
                                <label className="form-label" for="date_created">Date: </label>
                                <input
                                    className="form-control form-control-sm"
                                    type="date"
                                    name="date_created"
                                    id="date_created"
                                    value={ dateCreated }
                                    disabled={ true }
                                    
                                />
                            </div>
                            <div className="mb-3 field">
                                <label className="form-label" for="remarks">Service Offered</label>
                                <textarea
                                    className="form-control"
                                    id="remarks"
                                    rows="3"
                                    name="remarks"
                                    value={ remarks }
                                    onChange={ e => { setRemarks(e.target.value) }}
                                ></textarea>
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
                                    <td>
                                        <input
                                            type="number"
                                            name="service_cost"
                                            value={ serviceCost }
                                            onChange={ e => setServiceCost(e.target.value) }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Detergent</th>
                                    <td>
                                        <input
                                            type="number"
                                            name="detergent_cost"
                                            value={ detergentCost }
                                            onChange={ e => setDetergentCost(e.target.value) }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Fab Con</th>
                                    <td>
                                        <input
                                            type="number"
                                            name="fabcon_cost"
                                            value={ fabconCost }
                                            onChange={ e => setFabconCost(e.target.value) }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bleach</th>
                                    <td>
                                        <input
                                            type="number"
                                            name="bleach_cost"
                                            value={ bleachCost }
                                            onChange={ e => setBleachCost(e.target.value) }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Plastic</th>
                                    <td>
                                        <input
                                            type="number"
                                            name="plastic_cost"
                                            value={ plasticCost }
                                            onChange={ e => setPlasticCost(e.target.value) }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td id="total">{(parseFloat(serviceCost) + parseFloat(detergentCost) + parseFloat(fabconCost) + parseFloat(bleachCost) + parseFloat(plasticCost)) || 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label" for="date_required">Date/Time Required</label>
                            <input
                                className="form-control form-control-sm"
                                type="date"
                                name="date_required"
                                id="date_required"
                                value={ dateRequired }
                                onChange={ e => { setDateRequired(e.target.value) }}
                            />
                            <input
                                className="form-control form-control-sm"
                                type="time"
                                name="time_required"
                                id="time_required"
                                value={ timeRequired }
                                onChange={ e => { setTimeRequired(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row submit-row">
                    <div className="col">
                        <input
                            type="submit"
                            className="btn btn-success"
                            value="Create"
                            onClick={ handleSubmit }
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateOrderForm;
