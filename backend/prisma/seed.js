import { PrismaClient } from "@prisma/client";
import meditationService from "../services/meditationService.js";
import { generateMeditationSeed } from "../seed/meditationSeed.js";
import { generateWorkoutSeed } from "../seed/workoutSeed.js";
import workoutService from "../services/workoutService.js";

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

async function main() {
    workout();
}

await main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
