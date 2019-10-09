module.exports = function isBlank(str = "") {
	return (str.replace(/([\s_]+)/g, "").length === 0);
}