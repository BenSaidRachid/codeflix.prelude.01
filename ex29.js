module.exports = function isDigit(str = "") {
	return (str.replace(/([0-9]+)/g, "").length === 0);
}