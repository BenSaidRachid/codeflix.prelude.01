module.exports = function repeat(str = "", timesopt = 1) {
    let new_str = "";

    for(let i = 0; i < timesopt; i++) {
        new_str += str;
    }
    return new_str;
} 