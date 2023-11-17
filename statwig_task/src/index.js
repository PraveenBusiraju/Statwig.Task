import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';

const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <Contact />
  }, {
    path: "/home",
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rootRoute} />
  </React.StrictMode>
);


reportWebVitals();
