module.exports = function kebabcase(str = "") {
    return str.replace(/[^a-zA-Z0-9\s_]/g, "")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/([\s_]+)/g, '-')
    .toLowerCase();
}