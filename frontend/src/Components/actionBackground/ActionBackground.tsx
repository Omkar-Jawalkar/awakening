import actionBackgroundImage from "../../assets/action-background.png";
const ActionBackground = (
    {
        // title,
        // description,
        // icon,
        // onClick,
        // children,
        // onSuccess,
        // onError,
    }: any
) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                className="w-full h-full object-fill"
                src={actionBackgroundImage}
            />
            <div className="z-20 top-[10%] opacity-50 bg-[#1f1531] w-[650px] h-[450px] border-1 border-violet-400 left-[10%] absolute text-amber-50">
                <div className="flex flex-col justify-center items-center gap-4">
                    {/* title */}
                    <div className="text-center opacity-100  mt-16 gap-4 flex justify-center items-center">
                        <h1 className="text-4xl">Icon </h1>
                        <h1 className="text-4xl drop-shadow-[0px_0px_46px_rgba(76,0,255,0.7)]">
                            Notification
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionBackground;
