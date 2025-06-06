import { createHashRouter } from "react-router-dom";
import Login from "Components/login/Login";
import Home from "Components/home/Home";
import Settings from "../Components/settings/Settings";
const router = createHashRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
]);

export default router;
