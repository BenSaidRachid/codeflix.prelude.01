module.exports = function startsWith(str = "", start, positionopt = 0) {
    return (str.substr(positionopt, start.length) === start);
}