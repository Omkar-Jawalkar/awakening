export const getTokensAndIdFromUrl = (url: string) => {
    let [_, tokenString, refreshTokenString, id] = url?.split("?");

    const token = tokenString?.split("=")[1];
    const refreshToken = refreshTokenString?.split("=")[1];
    const userId = id?.split("=")[1];

    if (!token && !refreshToken && !id)
        return { token: "", refreshToken: "", id: "" };

    return { token, refreshToken, id: userId };
};
