import prisma from "../prisma/client.js";

const getWorkouts = async (userId) => {
    return await prisma.workout.findMany({
        where: {
            userId: userId,
        },
    });
};

const createWorkout = async (workoutData) => {
    return await prisma.workout.create({ data: workoutData });
};

const deleteWorkout = async (workoutId) => {
    return await prisma.workout.delete({
        where: {
            id: workoutId,
        },
    });
};

const updateWorkout = async (workoutId, workoutData) => {
    return await prisma.workout.update({
        where: {
            id: workoutId,
        },
        data: workoutData,
    });
};

export default {
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout,
};
