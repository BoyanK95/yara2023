const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear
    const retirement = 65 - age

    return `${firstName} is going to retire in ${retirement} years`
}

console.log(yearUntilRetirement(1995, 'Boyan'));