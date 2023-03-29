import axios from 'axios';

const API_URL = 'http://localhost:8000';
const customersAPI = API_URL + '/api/customers';

export async function getAllCustomers() {
    const response = await axios.get(customersAPI);
    return response.data;
}
