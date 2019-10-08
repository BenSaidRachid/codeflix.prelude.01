module.exports = function capitalize(str = "", restToLoweropt = false) {
    return (restToLoweropt) ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() :
        str.charAt(0).toUpperCase() + str.slice(1);
}