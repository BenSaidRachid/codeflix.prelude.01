module.exports = function countWords(str = "", patternopt) {
    let new_str = str.replace(/[^a-zA-Z0-9]/g, "")
    .replace(/([A-Z])/g, " $1").trim();
    return new_str.split(" ").length;
}