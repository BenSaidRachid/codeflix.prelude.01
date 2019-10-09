module.exports = function endsWith(str = "", end, positionopt = str.length) {
    let array = str.split(" ");
    if(positionopt === str.length) {
        return (end === array[array.length - 1]);
    }
	return (array[array.length - 1].substr(positionopt - end.length, end.length) === end);
}