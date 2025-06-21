import meditationService from "../services/meditationService.js";
import { formatDate } from "../utils/formatDate.js";
import { giveFormattedCurrentAndNextDate } from "../utils/giveFormattedCurrentAndNextDate.js";
const createMeditation = async (req, res, next) => {
    try {
        const meditations = await meditationService.createMeditation(req.body);
        res.status(201).json(meditations);
    } catch (error) {
        next(error);
    }
};

const deleteMeditation = async (req, res, next) => {
    try {
        const meditation = await meditationService.deleteMeditation(
            req.query.id
        );
        res.status(200).json(meditation);
    } catch (error) {
        next(error);
    }
};

const updateMeditation = async (req, res, next) => {
    try {
        const meditation = await meditationService.updateMeditation(
            req.query.id,
            req.user.id,
            req.body
        );
        res.status(200).json(meditation);
    } catch (error) {
        next(error);
    }
};
const getAllMeditationsUsingDate = async (req, res, next) => {
    try {
        const { formattedDate, formattedNextDate } =
            giveFormattedCurrentAndNextDate(req.query.date);
        const meditations = await meditationService.getAllMeditationsUsingDate(
            req.user.id,
            new Date(formattedDate),
            new Date(formattedNextDate)
        );
        res.status(201).json(meditations);
    } catch (error) {
        next(error);
    }
};

export default {
    createMeditation,
    updateMeditation,
    deleteMeditation,
    getAllMeditationsUsingDate,
};
