export const manageTimeout = (setValue: any) => {
    let timeoutId = setTimeout(() => {
        setValue((prev: any) => {
            if (prev <= 0) {
                clearTimeout(timeoutId);
                return 0;
            }

            return secondsToMinutes(minutesToSeconds(prev) - 1);
        });
    }, 1000);
};

function minutesToSeconds(minutes: any) {
    return minutes * 60; // Multiply minutes by 60 to get the equivalent number of seconds.
}

function secondsToMinutes(seconds: any) {
    return seconds / 60; // Divide the number of seconds by 60.
}
