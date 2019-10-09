module.exports = function splice(str = "", start, deleteCountopt = str.legth - start, toAddopt = "") {
    let new_str = "";
    let init_start = (start < 0) ? 0 : deleteCountopt;
    let init_end = (start < 0) ? str.length - deleteCountopt : str.length;

    for(let i = init_start; i < init_end; i++) {
        new_str += str.charAt(i);
    }
    return (start < 0) ? new_str + toAddopt : toAddopt + new_str;
} 