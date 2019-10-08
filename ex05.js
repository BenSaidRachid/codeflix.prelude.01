module.exports = function decapitalize(str = "") {
    let new_str = "";
    for (let word of str.split(" ")) {
        new_str += word.charAt(0).toLowerCase() + word.slice(1) + " ";
    }
    return new_str.trim();
}