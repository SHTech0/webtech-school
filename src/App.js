import "./App.css";
import Navbar from "./tailwind/Navbar";
import Home from "./pages/home/Home";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import { router } from "./router/Router";

function App() {
    return (
        <>
            <body className="bg-white dark:bg-secondary-200">
                <RouterProvider router={router}></RouterProvider>
            </body>
        </>
    );
}

export default App;
