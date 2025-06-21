import prisma from "../prisma/client.js";

const createMeditation = async (meditationData) => {
    return await prisma.meditation.create({ data: meditationData });
};

const deleteMeditation = async (meditationId) => {
    return await prisma.meditation.delete({
        where: {
            id: meditationId,
        },
    });
};

const updateMeditation = async (meditationId, userId, meditationData) => {
    return await prisma.meditation.update({
        where: {
            id: meditationId,
            userId: userId,
        },
        data: meditationData,
    });
};

const getAllMeditationsUsingDate = async (userId, date, nextDate) => {
    return await prisma.meditation.findMany({
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
    createMeditation,
    deleteMeditation,
    updateMeditation,
    getAllMeditationsUsingDate,
};
