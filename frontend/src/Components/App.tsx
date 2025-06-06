import { RouterProvider } from "react-router-dom";
import router from "../router/router";

function App() {
    return (
        <div className="bg-[#1f1531] scroll-none  h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
