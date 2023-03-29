import axios from 'axios';

// TODO: Add || for when env variable has been set up

const API_URL = 'http://localhost:8000';
const ordersAPI = API_URL +  '/api/orders/';

export async function getAllOrders() {
    const response = await axios.get(ordersAPI);
    return response.data;
};

