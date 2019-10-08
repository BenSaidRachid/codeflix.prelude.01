module.exports = function countSubstrings(str = "", substring) {
    let i = 0;
    for (let word of str.split(" ")) {
        if(word === substring)
            i++;
    }
    return i;
}