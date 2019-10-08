module.exports = function reverse(str = "") {
    let new_str = "";

    for(let i = str.length - 1; i >= 0; i--)
        new_str += str.charAt(i);

    return new_str;
} 