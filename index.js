function findLongestWord(arr) {
    let longestWord = "";
    for (let word of arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
  
function sumUniqueNumbers(arr) {
    let uniqueNumbers = arr.filter((num, index) => arr.indexOf(num) === index);
    return uniqueNumbers.reduce((sum, num) => sum + num, 0);
};

function mergeArrays(...arrays) {
    let mergedArray = [].concat(...arrays);
    return Array.from(new Set(mergedArray));
};

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
};

function getPropertyValue(obj, prop) {
    return obj[prop];
};

  



