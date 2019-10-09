module.exports = function words(str = "", patternopt, flagsopt) {
    let new_str = str.replace(/[^a-zA-Z0-9]/g, "")
    .replace(/([A-Z])/g, " $1").trim();
    return new_str.split(" ");
}