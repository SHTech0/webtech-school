import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Courses from "../pages/courses/Courses";
import Home from "../pages/home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
        </>
    )
);
