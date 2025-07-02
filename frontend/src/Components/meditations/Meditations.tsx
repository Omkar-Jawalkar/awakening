import ActionBackground from "../actionBackground/ActionBackground";
import { meditationsAtom } from "../recoil/meditationsAtom";
import { useRecoilState } from "recoil";
import ParticleBackground from "../common/ParticleBackground";
import { useState } from "react";
import { manageTimeout } from "../../Utils/manageTimeout";
import { ChevronLeft, Heart } from "lucide-react";

const Meditations = () => {
    const [meditations] = useRecoilState(meditationsAtom);

    const [isActive, setIsActive] = useState(false);
    const [selectedTime, setSelectedTime] = useState(2);
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);
    const [timeoutState, setTimeoutState] = useState(0);

    const timeOptions = [3, 5, 7, 10];

    const handleStartBreathing = () => {
        setTimeoutState(selectedTime);
        setIsActive(true);
        manageTimeout(setTimeoutState);
    };

    const handleBackClick = () => {
        setIsActive(false);
    };

    const formatTime = (minutes: any) => {
        return `${minutes.toString().padStart(2, "0")}:00`;
    };

    const buttonWithTimer = () => {
        return (
            <div className="p-6 ">
                <button
                    onClick={handleStartBreathing}
                    className="bg-purple-400 hover:bg-purple-500 text-black font-medium py-4 px-8 rounded-full text-sm transition-colors duration-200 shadow-lg"
                >
                    {isActive ? timeoutState : "Start breathing"}
                </button>
            </div>
        );
    };

    const newMeditation = () => {
        return (
            <div className="w-full  bg-black text-white relative overflow-hidden">
                {/* Background particles container - you mentioned you have this handled */}
                <ParticleBackground />
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    {/* Main content area */}
                    <div className="flex-1 flex-col justify-center items-center flex px-6 md:px-8 mt-6">
                        {/* Time selector */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setShowTimeDropdown(!showTimeDropdown)
                                }
                                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                            >
                                <span className="text-xl font-light">
                                    {formatTime(selectedTime)}
                                </span>
                                <svg
                                    className={`w-6 h-6 transition-transform ${showTimeDropdown ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            {showTimeDropdown && (
                                <div className="absolute top-full h-screen left-1/2 transform -translate-x-1/2 mt-4 bg-gray-800/90 backdrop-blur-sm rounded-lg py-2 min-w-[120px] border border-white/10">
                                    {timeOptions.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => {
                                                setSelectedTime(time);
                                                setShowTimeDropdown(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${
                                                selectedTime === time
                                                    ? "text-white bg-white/5"
                                                    : "text-white/70"
                                            }`}
                                        >
                                            {formatTime(time)}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom button */}
                </div>

                {/* Overlay for dropdown */}
                {showTimeDropdown && (
                    <div
                        className="fixed inset-0 z-5"
                        onClick={() => setShowTimeDropdown(false)}
                    />
                )}
            </div>
        );
    };

    return (
        <ActionBackground
            icon="1"
            title="Meditations"
            description="lorem ipsum"
            children={() => newMeditation()}
            timer={() => buttonWithTimer()}
        />
    );
};

export default Meditations;
