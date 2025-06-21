import prisma from "../prisma/client.js";

const createTask = async (taskData) => {
    return await prisma.task.create({ data: taskData });
};

const getTask = async (taskId) => {
    return await prisma.task.findUnique({
        where: {
            id: taskId,
        },
    });
};

const updateTask = async (taskId, userId, taskData) => {
    return await prisma.task.update({
        where: {
            id: taskId,
            userId: userId,
        },
        data: taskData,
    });
};

const deleteTask = async (taskId, userId) => {
    return await prisma.task.delete({
        where: {
            id: taskId,
            userId: userId,
        },
    });
};

const getAllTasksUsingDate = async (userId, date, nextDate) => {
    return await prisma.task.findMany({
        where: {
            updatedAt: {
                gte: date,
                lt: nextDate,
            },
            userId: userId,
        },
    });
};

export default {
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllTasksUsingDate,
};
