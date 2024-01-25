import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// importing from routes
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import BeeBeauties from "./routes/Beebeauties"
import Blog from "./routes/Blog"
import Success from "./routes/Success";
import Cancel from "./routes/Cancel"

//impprting from componenets
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//importing from cartContext
import CartProvider from "./CartContext";


function AppLayout() {
    return (
        <CartProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </CartProvider>
    );
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "beebeauties",
                element: <BeeBeauties />,
            },
            {
                path: "success",
                element: <Success />,
            },
            {
                path: "cancel",
                element: <Cancel />,
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);