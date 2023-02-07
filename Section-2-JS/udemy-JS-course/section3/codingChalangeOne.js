const caltAvrg = (num1, num2, num3) => (num1 + num2 + num3) / 3

const scoreDolphins = caltAvrg(44, 23, 71)
const scoreKoalas = caltAvrg(65, 54, 49)

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolph, avgKoalas) {
    if (avgDolph >= 2 * avgKoalas) {
        console.log(`Dolphins win 🥇 (${avgDolph} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolph * 2) {
        console.log(`Koalas win 🥇 (${avgDolph} vs. ${avgKoalas})`);
    } else {
        console.log('No team wins ...');
    }
}

checkWinner(scoreDolphins, scoreKoalas)

checkWinner( 523, 11)