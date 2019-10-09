module.exports = function chars(str = "") {
    let array = new Array();
    for (const char of str) {
        array.push(char);
    }
    return array;
}