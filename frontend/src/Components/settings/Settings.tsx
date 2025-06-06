import { useEffect } from "react";
import { getUserInfoById } from "../../api/getUserInfo";
import { useNavigate } from "react-router-dom";
const Settings = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("id");

    const goToHome = () => {
        navigate("/home");
    };

    useEffect(() => {
        const response = getUserInfoById(id);

        console.log(response);
    }, []);

    return (
        <div>
            Settings
            <button className="text-amber-200" onClick={goToHome}>
                go to home page
            </button>
        </div>
    );
};

export default Settings;
