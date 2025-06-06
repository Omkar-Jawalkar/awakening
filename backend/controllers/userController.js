import userService from "../services/userService.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(201).json(users);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.query.id);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const findUserById = async (req, res, next) => {
    try {
        const user = await userService.findUserById(req.query.id);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export default { getAllUsers, createUser, deleteUser, findUserById };
