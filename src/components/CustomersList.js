import '../styles/customers_list.css';

import { useEffect, useState } from 'react';
import { getAllCustomers } from '../services/CustomersService';

function CustomersList() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        handleFetchCustomers();
    }, []);

    const handleFetchCustomers = async () => {
        const results = await getAllCustomers();
        setCustomers(results.results);
    };

    return (
        <div class="data-table container container-fluid">
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
                    {customers.map( customer => (
                        <tr>
                            <td>{ customer.pk } </td>
                            <td>{ customer.first_name }</td>
                            <td>{ customer.contact_number }</td>
                            <td>{ customer.date_created }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomersList;
