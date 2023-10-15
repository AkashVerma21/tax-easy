import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GstComponent from './components/GST/GstComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ITRComponent from './components/ITR/ITRComponent';
import Homecomponent from './components/Home/HomeComponent';
import CompanyRegistrationComponent from './components/CompanyRegistration/CompanyRegistrationComponent';
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminComponent from './components/Admin/AdminComponent';
import ContactUsRouteComponent from './components/ContactUsRoute/ContactUsRouteComponent';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: '/',
      element: <Homecomponent/>
    },
    {
      path: '/:id',
      element: <Homecomponent/>
    },
    {
      path: '/gst',
      element: <GstComponent/>
    },
    {
      path: '/itr',
      element: <ITRComponent/>
    },
    {
      path: '/company-registration',
      element: <CompanyRegistrationComponent/>
    },
    {
      path: '/contact-us',
      element: <ContactUsRouteComponent/>
    },
    {
      path: '/admin',
      element: <AdminComponent/>
    }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
