module.exports = function snakeCase(str = "") {
    const SEPARATOR = "_";
    return str.replace(" ", SEPARATOR)
    .replace("");
}