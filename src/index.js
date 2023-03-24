import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css';

import App from './App';
import Menu from './components/Menu';
import CreateOrderForm from './components/CreateOrderForm';
import EditOrderForm from './components/EditOrderForm';
import CustomersList from './components/CustomersList';

import reportWebVitals from './reportWebVitals';
import OrdersTable from './components/OrdersTable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />
      }, {
        path: 'orders/new/',
        element: <CreateOrderForm />
      }, {
        path: 'orders/edit/:order_id',
        element: <EditOrderForm />
      }, {
        path: 'orders',
        element: <OrdersTable />
      }, {
        path: 'customers',
        element: <CustomersList />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
