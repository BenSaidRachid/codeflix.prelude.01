module.exports = function unescapeRegExp(str = "") {
    return str.replace(/(\\)(\W)/g, "$2");
}