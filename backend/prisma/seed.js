import { PrismaClient } from "@prisma/client";
import meditationService from "../services/meditationService.js";
import { generateMeditationSeed } from "../seed/meditationSeed.js";

const prisma = new PrismaClient();

async function main() {
    const meditationSeed = generateMeditationSeed(20);

    for (const meditation of meditationSeed) {
        await meditationService.createMeditation(meditation);
    }

    console.log("✅ Seeded meditation data");
}

await main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
