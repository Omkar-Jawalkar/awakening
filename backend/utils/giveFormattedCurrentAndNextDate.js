import { formatDate } from "./formatDate.js";

export const giveFormattedCurrentAndNextDate = (dateInTimestamp) => {
    const formattedDate = formatDate(parseInt(dateInTimestamp));
    const nextDate = parseInt(dateInTimestamp) + +24 * 60 * 60 * 1000;
    const formattedNextDate = formatDate(nextDate);

    return { formattedDate, formattedNextDate };
};
