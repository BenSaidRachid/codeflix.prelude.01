module.exports = function isAlpha(str = "") {
	return (str.replace(/([A-Za-z])/g, "").length === 0);
}