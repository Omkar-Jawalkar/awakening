export const getTokensFromUrl = (url: string) => {
    let [_, tokenString, refreshTokenString] = url?.split("?");

    const token = tokenString?.split("=")[1];
    const refreshToken = refreshTokenString?.split("=")[1];

    if (!token && !refreshToken) return { token: "", refreshToken: "" };

    return { token, refreshToken };
};
