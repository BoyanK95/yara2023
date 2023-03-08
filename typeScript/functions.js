var subtract = function (a, b) {
    return a - b;
};
var add = function (a, b) {
    return a + b;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var tomorowsWeather = {
    date: new Date(),
    weather: 'rainy'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
var logWeatherTwo = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
/** ES2015 */
// const logWeather = ({date, weather}) => {
//     console.log(date);
//     console.log(weather);
// }
logWeather(todaysWeather);
logWeatherTwo(tomorowsWeather);
