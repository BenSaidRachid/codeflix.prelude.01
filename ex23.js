module.exports = function trim(str = "", whitespaceopt = " ") {
    let re = new RegExp("^" + whitespaceopt + "*|"+ whitespaceopt +"*$", "g");
    return str.replace(re, "");
}