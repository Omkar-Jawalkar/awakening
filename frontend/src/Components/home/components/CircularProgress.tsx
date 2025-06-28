const CircularProgress = ({ progress = 65 }) => {
    // Calculate the stroke-dasharray for the progress circle
    const sizeConfig = {
        sm: {
            radius: 8,
            strokeWidth: 2,
            className: "w-4 h-4",
            textSize: "text-[6px]",
        },
        md: {
            radius: 20,
            strokeWidth: 3,
            className: "w-12 h-12",
            textSize: "text-xs",
        },
        lg: {
            radius: 30,
            strokeWidth: 4,
            className: "w-20 h-20",
            textSize: "text-sm",
        },
    };


    const radius = 8;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative">
            {/* Background circle (light gray) */}
            <svg
                className="transform -rotate-90 w-26 h-20 min-w-[20px] min-h-[20px]"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    fill="none"
                />
            </svg>

            {/* Progress circle (blue gradient) */}
            <svg
                className="absolute top-0 left-0 transform -rotate-90 w-26 h-2 min-w-[20px] min-h-[20px]"
                viewBox="0 0 100 100"
            >
                <defs>
                    <linearGradient
                        id="progressGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#4338ca" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="url(#progressGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>

            {/* Progress percentage in the center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs  font-bold text-white">
                    {progress}%
                </span>
            </div>
        </div>
    );
};

export default CircularProgress;
