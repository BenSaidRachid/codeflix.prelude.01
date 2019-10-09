module.exports = function insert(str = "", toInsertopt = "", positionopt = 0) {
    let new_str = "";
    
	for (let i = 0; i < positionopt; i++) {
		new_str += str.charAt(i);
    }
    new_str += toInsertopt;
	return new_str.concat(str.slice(new_str.length - 1));
}