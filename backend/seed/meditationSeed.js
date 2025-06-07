import { faker } from "@faker-js/faker";

const UserIds = [
    "c1401df1-8693-4a20-a7de-5c141f016ac6",
    "e7de6e7e-6ba9-4839-9d84-436525fbff9b",
    "ea64a59a-4567-4644-b5ab-ab28eff5c863",
];

const meditationNames = [
    "Morning Calm",
    "Evening Relaxation",
    "Mindful Breathing",
    "Focus Boost",
    "Sleep Sounds",
    "Anxiety Relief",
];

const meditationTypes = ["guided", "unguided", "sound", "music", null];
const modeTypes = ["Basic", "Advance"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function createRandomMeditation() {
    return {
        id: faker.string.uuid(),
        userId: getRandomElement(UserIds),
        meditationName: getRandomElement(meditationNames),
        meditationType: getRandomElement(meditationTypes),
        meditationMinutes: faker.number.int({ min: 5, max: 60 }),
        XPValue: faker.number.float({ min: 10, max: 200 }),
        modeType: getRandomElement(modeTypes),
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}

// Generate an array of sample meditations
export function generateMeditationSeed(count = 10) {
    return Array.from({ length: count }, () => createRandomMeditation());
}

// Example usage
// const seedData = generateMeditationSeed(20);
// console.log(seedData);
