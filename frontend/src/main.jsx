import React from 'react'
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'; // Assuming this is a component to be used in routes or another part of the app
import './index.css';
import Authencation, { PageType } from './pages/Authencation.jsx';

// Example of creating a basic router if you haven't defined one yet
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use the App component as the root element
  },
  {
    path: "/login",
    element: <Authencation pagetype= {PageType.LOGIN} />, 
  },
  {
    path: "/register",
    element: <Authencation  pagetype= {PageType.REGISTER} />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

