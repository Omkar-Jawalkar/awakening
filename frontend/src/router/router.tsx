import { createHashRouter } from "react-router-dom";
import Login from "Components/login/Login";
import Home from "Components/home/Home";
const router = createHashRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

export default router;
