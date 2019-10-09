module.exports = function isLowerCase(str = "") {
	return (str.replace(/([a-z]+)/g, "").length === 0);
}