import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import Proveider from './Proveider/Proveider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Proveider>
      <RouterProvider router={router} />
      </Proveider>
  </React.StrictMode>,
)
