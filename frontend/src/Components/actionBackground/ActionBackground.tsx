import { useNavigate } from "react-router-dom";
import actionBackgroundImage from "../../assets/action-background.png";
const ActionBackground = ({
    title = "Notification",
    description = "lorem ipsum",
    icon = "!!",
    // onClick,
    children,
    timer = "00:22:33",
    // onSuccess,
    // onError,
}: any) => {
    const navigate = useNavigate();

    return (
        <div className="relative font-serif w-full h-full overflow-hidden">
            <img
                className="w-full h-full object-fill"
                src={actionBackgroundImage}
            />
            <div className="z-20 top-[10%] p-2  bg-[#1f1531]/50 w-[650px] h-[450px] border-1 border-violet-400 left-[10%] absolute text-amber-50">
                <button onClick={() => navigate("/")}>back to home</button>
                <div className="flex flex-col justify-between h-full items-center gap-4">
                    {/* title & description */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center opacity-100  mt-12   gap-4 flex justify-center items-center">
                            <h1 className="text-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                                {icon}{" "}
                            </h1>
                            <h1 className="text-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] shadow-voilet-500/50">
                                {title}
                            </h1>
                        </div>
                        <p className="drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                            {description}
                        </p>
                    </div>
                    <div className="w-full h-full">
                        {children && children()}
                    </div>
                    <div className="text-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] p-6">
                        {timer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionBackground;
