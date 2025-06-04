import mainImage from "Assets/junwoo-2.jpg";
import { googleLogin } from "../../api/googleLogin";

const Login = () => {
    return (
        <div className="flex justify-start items-center  bg-[#1f1531] h-screen">
            <img
                className="w-1/2 flex-1 object-cover h-screen"
                src={mainImage}
                alt="jinwoo"
            />
            <div className="text-white flex-1 h-screen w-full justify-end p-8 flex-col gap-24 flex items-center align-bottom">
                <div>
                    <h1 className="text-5xl font-bold ">Your</h1>
                    <h1 className="text-5xl font-bold  text-[#b99ee4]">
                        Awakening
                    </h1>
                    <h1 className="text-5xl font-bold">Begins Now</h1>

                    <p className="text-[#b99ee4] text-md mt-4">
                        Walk your path. Take action. Conquer. Become a true
                        legend!
                    </p>
                </div>

                <button
                    onClick={() => googleLogin()}
                    className="bg-[#b99ee4] cursor-pointer text-[#2c1750] font-bold px-24 py-3 rounded-full mt-8 transition duration-300"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Login;
