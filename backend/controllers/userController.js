import userService from "../services/userService.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(201).json(users);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        console.log("mybody", req.body);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export default { getAllUsers, createUser };
