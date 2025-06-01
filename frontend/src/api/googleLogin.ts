export const googleLogin = async () => {
    try {
        const signInGoogleURL = `${import.meta.env.VITE_BACKEND_URL}/api/v0/auth/google`;
        window.api.openExternal(signInGoogleURL);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; // Re-throw the error for further handling if needed
    }
};
