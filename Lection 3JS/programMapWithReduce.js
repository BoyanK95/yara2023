/*    
    var nums = [1,2,3,4,5]
    
    // `map` is your exported function
    var output = map(nums, function double(item) {
      return item * 2
    })
    
    console.log(output) // => [2,4,6,8,10]
     */

function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce((acc, cur) => {
        acc.push(fn(cur));

        return acc;
    }, []);
};

const nums = [1, 2, 3, 4, 5];

const res = arrayMap(nums, multByTwo)
console.log(res);

function multByTwo(item) {
    return item * 2;
}
