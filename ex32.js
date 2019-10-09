module.exports = function isUpperCase(str = "") {
	return (str.replace(/([A-Z]+)/g, "").length === 0);
}