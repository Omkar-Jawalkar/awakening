import meditationService from "../services/meditationService.js";
import { formatDate } from "../utils/formatDate.js";
const createMeditation = async (req, res, next) => {
    try {
        const users = await meditationService.createMeditation(req.body);
        res.status(201).json(users);
    } catch (error) {
        next(error);
    }
};

const deleteMeditation = async (req, res, next) => {
    try {
        const users = await meditationService.deleteMeditation(req.query.id);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const updateMeditation = async (req, res, next) => {
    try {
        const users = await meditationService.updateMeditation(
            req.query.id,
            req.body
        );
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};
const getAllMeditationsUsingDate = async (req, res, next) => {
    try {
        const formattedDate = formatDate(parseInt(req.query.date));
        const nextDate = parseInt(req.query.date) + +24 * 60 * 60 * 1000;
        const formattedNextDate = formatDate(nextDate);
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
