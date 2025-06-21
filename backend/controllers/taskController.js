import taskService from "../services/taskService.js";
import { giveFormattedCurrentAndNextDate } from "../utils/giveFormattedCurrentAndNextDate.js";

const createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

const getTask = async (req, res, next) => {
    try {
        const task = await taskService.getTask(req.query.id);
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = await taskService.updateTask(
            req.query.id,
            req.user.id,
            req.body
        );
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const task = await taskService.deleteTask(req.query.id, req.user.id);
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const getAllTasksUsingDate = async (req, res, next) => {
    try {
        const { formattedDate, formattedNextDate } =
            giveFormattedCurrentAndNextDate(req.query.date);

        const tasks = await taskService.getAllTasksUsingDate(
            req.user.id,
            new Date(formattedDate),
            new Date(formattedNextDate)
        );
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

export default {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    getAllTasksUsingDate,
};
