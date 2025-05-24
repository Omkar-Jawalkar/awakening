import prisma from "../prisma/client.js";

const getAllUsers = async () => {
    return await prisma.user.findMany();
};

const createUser = async (userData) => {
    return await prisma.user.create({ data: userData });
};

export default { getAllUsers, createUser };
