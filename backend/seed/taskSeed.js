import { faker } from "@faker-js/faker";

// Example user IDs — replace with real ones or generate dynamically
const userIds = [
    "c1401df1-8693-4a20-a7de-5c141f016ac6",
    "e7de6e7e-6ba9-4839-9d84-436525fbff9b",
    "ea64a59a-4567-4644-b5ab-ab28eff5c863",
];

const priorities = ["low", "medium", "high"];
const statuses = ["pending", "completed"];
const modeTypes = ["Basic", "Advanced", "Pro"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateTask(userId) {
    return {
        userId,
        taskName: faker.hacker.phrase(), // Example: “generate cross-platform protocol”
        taskPriority: faker.helpers.arrayElement(priorities),
        taskStatus: faker.helpers.arrayElement(statuses),
        modeType: faker.helpers.arrayElement(modeTypes),
        XPValue: faker.number.float({ min: 10, max: 200 }),
        createdAt: faker.date.past(),
    };
}

export const generateTaskSeed = (count = 10) => {
    return Array.from({ length: count }, () =>
        generateTask(getRandomElement(userIds))
    );
};
