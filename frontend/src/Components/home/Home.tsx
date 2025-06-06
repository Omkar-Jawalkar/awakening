import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const goToSettings = () => {
        navigate("/settings");
    };
    return (
        <div>
            <button onClick={goToSettings} className="text-amber-200">
                {" "}
                click me to go to settings
            </button>
        </div>
    );
};

export default Home;
