const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} , ha already retired 👨🏻‍🦳`);
        return -1;
    }

    // return `${firstName} is going to retire in ${retirement} years`
};

console.log(yearUntilRetirement(1995, 'Boyan'));
console.log(yearUntilRetirement(1952, 'Stoyan'));
