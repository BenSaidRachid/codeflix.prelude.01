module.exports = function escapeRegExp(str = "") {
    return str.replace(/(\W)/g, "\\$1");
}