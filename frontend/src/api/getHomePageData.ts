import axios from "../axios/axiosIntercepter";
export const getHomepageData = async () => {
    try {
        let date = 1751129992225;
        // let date = Date.now();
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/v0/score/getHomepageData`,
            {
                params: {
                    date: date,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error getting user info:", error);
        throw error; // Re-throw the error for further handling if needed
    }
};
