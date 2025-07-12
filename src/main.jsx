import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./About/About";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Login from "../authentication/login";
import Registration from "../authentication/registration";
import HotelHome from "../Hotel/HotelHome";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
       {
        path: "/Login",
        element: <Login />,
      },
       {
        path: "/Registration",
        element: <Registration />,
      },
        {
        path: "/HotelHome",
        element: <HotelHome />,
      },
       {
        path: "/Home",
        element: <Home />,
      },
      
    ],
  },
]);

// Get root element from index.html
const root = document.getElementById("root");

// Render the app
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
