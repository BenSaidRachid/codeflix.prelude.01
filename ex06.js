module.exports = function kebabCase(str = "") {
    const SEPARATOR = "-";
    return str.replace(" ", SEPARATOR)
    .replace("");
}