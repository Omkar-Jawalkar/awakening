export const getTotalXpValueAndPercentage = (data) => {
    let totalXpValue = 0;
    let completedPercentage = 0;
    let totalPercentage = data?.length * 200;
    if (totalPercentage === 0) return [0, 0, 0];

    for (let i = 0; i < data.length; i++) {
        totalXpValue += data[i].XPValue;
    }
    completedPercentage = Math.ceil((totalXpValue / totalPercentage) * 100);
    totalXpValue = Math.ceil(totalXpValue);

    return [totalXpValue, completedPercentage, totalPercentage];
};

export const transformData = (tasks, meditation, workout) => {
    let result = [];

    let taskObject = {
        name: "tasks",
        totalXpValue: 0,
        totalCompletedPercentage: 0,
        totalPercentage: 0,
        data: tasks,
    };

    let meditationObject = {
        name: "meditation",
        totalXpValue: 0,
        totalCompletedPercentage: 0,
        totalPercentage: 0,
        data: meditation,
    };

    let workoutObject = {
        name: "workout",
        totalXpValue: 0,
        totalCompletedPercentage: 0,
        totalPercentage: 0,
        data: workout,
    };

    let [taskTotakXpValue, totalTaskCompletedPercentage, totalTaskPercentage] =
        getTotalXpValueAndPercentage(tasks);
    let [
        meditationTotalXpValue,
        totalMeditationCompletedPercentage,
        totaMeditationPercentage,
    ] = getTotalXpValueAndPercentage(meditation);
    let [
        workoutTotalXpValue,
        totalWorkoutCompletedPercentage,
        totalWorkoutPercentage,
    ] = getTotalXpValueAndPercentage(workout);

    taskObject["totalXpValue"] = taskTotakXpValue;
    taskObject["totalCompletedPercentage"] = totalTaskCompletedPercentage;
    taskObject["totalPercentage"] = totalTaskPercentage;

    meditationObject["totalXpValue"] = meditationTotalXpValue;
    meditationObject["totalCompletedPercentage"] =
        totalMeditationCompletedPercentage;
    meditationObject["totalPercentage"] = totaMeditationPercentage;

    workoutObject["totalXpValue"] = workoutTotalXpValue;
    workoutObject["totalCompletedPercentage"] = totalWorkoutCompletedPercentage;
    workoutObject["totalPercentage"] = totalWorkoutPercentage;

    result.push(taskObject, meditationObject, workoutObject);
    return result;
};
