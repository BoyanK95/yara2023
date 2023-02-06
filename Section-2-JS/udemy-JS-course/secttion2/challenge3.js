// 1. Calc the avrg score for each team, using the test data below

// 2 Compare team's avr score and log the winner (there can be a draw!)

//3. BONUS Include req for minimum score of 100. Team only wins if it has a higher score && if score > 100

const dolphinsScores = [96, 108, 89]
const koalasScores = [88 , 91, 110]

const dolphinsAvrgScore = dolphinsScores.reduce((sum, cur) => sum + cur) / dolphinsScores.length
const koalasAvrgScore = koalasScores.reduce((sum, cur) => sum + cur) / koalasScores.length

console.log(dolphinsAvrgScore, koalasAvrgScore);

if (dolphinsAvrgScore > koalasAvrgScore) {
    console.log(`Dolphins win with a higher score of ${dolphinsAvrgScore}`);
} else {
    console.log(`Koalas win, with a higher score of ${koalasAvrgScore}`);
}


