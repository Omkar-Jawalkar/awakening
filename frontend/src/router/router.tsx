import { createHashRouter } from "react-router-dom";
import Login from "Components/login/Login";
import ActionBackground from "../Components/actionBackground/ActionBackground";
import Home from "Components/home/Home";
import Settings from "../Components/settings/Settings";
const router = createHashRouter([
    {
        path: "/",
        element: <ActionBackground />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
]);

export default router;
