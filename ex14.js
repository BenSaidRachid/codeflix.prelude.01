module.exports = function count(str = "") {
    let new_str = "";
    let count = 0;
    while (new_str != str) {
        new_str += str[count];
        count++;
    }
    return count;
}