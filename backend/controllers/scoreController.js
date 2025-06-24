import prisma from "../prisma/client.js";
import taskService from "../services/taskService.js";
import meditationService from "../services/meditationService.js";
import workoutService from "../services/workoutService.js";
import { giveFormattedCurrentAndNextDate } from "../utils/giveFormattedCurrentAndNextDate.js";
import { transformData } from "../utils/utils.js";

const getHomepageData = async (req, res, next) => {
    try {
        const { formattedDate, formattedNextDate } =
            giveFormattedCurrentAndNextDate(req.query.date);

        const userId = req.user.id;
        const [tasks, meditation, workout] = await Promise.all([
            taskService.getAllTasksUsingDate(
                userId,
                new Date(formattedDate),
                new Date(formattedNextDate)
            ),
            meditationService.getAllMeditationsUsingDate(
                userId,
                new Date(formattedDate),
                new Date(formattedNextDate)
            ),
            workoutService.getWorketUsingData(
                userId,
                new Date(formattedDate),
                new Date(formattedNextDate)
            ),
        ]);

        const allData = transformData(tasks, meditation, workout);
        res.status(200).json(allData);
    } catch (error) {
        next(error);
    }
};

export default {
    getHomepageData,
};
