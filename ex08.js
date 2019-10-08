module.exports = function swapCase(str = "") {
    let new_str = "";
    for (let char of str) {
        if (char === char.toUpperCase()) 
            char = char.toLowerCase();
        else
            char = char.toUpperCase();
        new_str += char;
    }
    return new_str;
}