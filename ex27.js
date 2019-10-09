module.exports = function isAlphaDigit(str = "") {
	return (str.replace(/([A-Za-z0-9])/g, "").length === 0);
}