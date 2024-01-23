import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import BeeBeauties from "./routes/Beebeauties"
import Blog from "./routes/Blog"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
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