import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import BeeBeauties from "./routes/Beebeauties"
import Blog from "./routes/Blog"
import Navbar from "./components/Navbar";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

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
        ],
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);