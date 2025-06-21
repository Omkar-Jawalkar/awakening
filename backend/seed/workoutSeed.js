import { faker } from "@faker-js/faker";

// Replace with real userIds from your DB or mock some manually
const userIds = [
    "c1401df1-8693-4a20-a7de-5c141f016ac6",
    "e7de6e7e-6ba9-4839-9d84-436525fbff9b",
    "ea64a59a-4567-4644-b5ab-ab28eff5c863",
];

const modeTypes = ["Basic", "Advance"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateWorkout(userId) {
    return {
        userId,
        pushupCount: faker.number.int({ min: 10, max: 100 }),
        curlupCount: faker.number.int({ min: 10, max: 100 }),
        squatCount: faker.number.int({ min: 10, max: 100 }),
        runWalk: faker.number.int({ min: 500, max: 5000 }), // meters
        XPValue: faker.number.float({ min: 10, max: 200 }),
        modeType: getRandomElement(modeTypes),
        createdAt: faker.date.past(),
        // updatedAt will auto-update with @updatedAt
    };
}

export function generateWorkoutSeed(count = 10) {
    debugger;
    const abc = generateWorkout(getRandomElement(userIds));
    console.log(abc);
    return Array.from({ length: count }, () =>
        generateWorkout(getRandomElement(userIds))
    );
}
