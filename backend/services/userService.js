import prisma from "../prisma/client.js";

const getAllUsers = async () => {
    return await prisma.user.findMany();
};

const createUser = async (userData) => {
    return await prisma.user.create({ data: userData });
};

const deleteUser = async (userId) => {
    return await prisma.user.delete({
        where: {
            id: userId,
        },
    });
};

const findUserByGoogleId = async (googleId) => {
    return await prisma.user.findUnique({
        where: {
            googleId: googleId,
        },
    });
};

const findUserById = async (userId) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
};

export default { getAllUsers, deleteUser, createUser };
