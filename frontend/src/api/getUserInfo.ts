import axios from "../axios/axiosIntercepter";
export const getUserInfoById = async (id: string | null) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/v0/users/getUser`,
            {
                params: {
                    id,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error getting user info:", error);
        throw error; // Re-throw the error for further handling if needed
    }
};
