function findLongestWord(str) {
    return str.split(' ').reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
}

let sentence = "The quick browned fox jumps over the lazy dog";
let longest = findLongestWord(sentence);
console.log("The longest word is:", longest);
