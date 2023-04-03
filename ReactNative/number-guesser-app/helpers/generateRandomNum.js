export function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max- min)) + min

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum
    }
}