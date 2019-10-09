module.exports = function isUpperCase(str = "") {
	return (str.replace(/[+-]?([0-9]*[.])?[0-9]|([eE][-+]?[0-9]+)/g, "").length === 0);
}