// const goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every((submittedUsers) => {
            return goodUsers.some((goodUsers) => {
                return goodUsers.id === submittedUsers.id;
            });
        });
    };
}

module.exports = checkUsersValid;

//   testAllValid([
//     { id: 2 },
//     { id: 4 },
//     { id: 1 }
//   ])
