import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProCards from "./components/ProCards";
import Header from "./components/Header";
import Cart from "./components/Cart";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <ProCards />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
