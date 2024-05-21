function createArray(firstParameter, secondParameter) {
    // Check if the first parameter is a number and the second parameter is a string
    if (typeof firstParameter === 'number' && typeof secondParameter === 'string') {
        // Create an array with the given number of items
        const resultArray = new Array(firstParameter).fill(secondParameter);
        return resultArray;
    } else {
        throw new Error('Invalid parameters. The first parameter should be a number and the second parameter should be a string.');
    }
}

module.exports = createArray;

 