export function calculateTargetDate(releaseDate) {
    const targetTimeInMS = releaseDate * (24 * 60 * 60 * 1000);
    const currentTimeInMS = new Date().getTime();

    return currentTimeInMS + targetTimeInMS;
}