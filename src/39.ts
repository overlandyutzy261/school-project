function getRandomInt(min: number = 0, max: number = 100): number {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
