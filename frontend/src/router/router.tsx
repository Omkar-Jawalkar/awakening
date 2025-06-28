import { createHashRouter } from "react-router-dom";
import Login from "Components/login/Login";
import Home from "Components/home/Home";
import Settings from "../Components/settings/Settings";
import Tasks from "../Components/tasks/Tasks";
import Meditations from "../Components/meditations/Meditations";
import Workouts from "../Components/workouts/Workouts";
const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home/tasks",
        element: <Tasks />,
    },
    {
        path: "/home/workouts",
        element: <Workouts />,
    },
    {
        path: "/home/meditations",
        element: <Meditations />,
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
