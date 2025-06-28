import { PrismaClient } from "@prisma/client";
import meditationService from "../services/meditationService.js";
import { generateMeditationSeed } from "../seed/meditationSeed.js";
import { generateWorkoutSeed } from "../seed/workoutSeed.js";
import workoutService from "../services/workoutService.js";
import { generateTaskSeed } from "../seed/taskSeed.js";
import taskService from "../services/taskService.js";

const prisma = new PrismaClient();

const meditation = async () => {
    const meditationSeed = generateMeditationSeed(20);

    for (const meditation of meditationSeed) {
        await meditationService.createMeditation(meditation);
    }
    console.log("✅ Seeded meditation data");
};

const workout = async () => {
    const workoutSeed = generateWorkoutSeed(20);

    for (const workout of workoutSeed) {
        await workoutService.createWorkout(workout);
    }
    console.log("✅ Seeded workout data");
};

const task = async () => {
    const taskSeed = generateTaskSeed(20);
    for (const task of taskSeed) {
        await taskService.createTask(task);
    }
    console.log("✅ Seeded task data");
};

async function main() {
    // workout();
    // task();
    meditation();
}

await main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
