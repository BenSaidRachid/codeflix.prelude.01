module.exports = function includes(str = "", search, positionopt = 0) {
    let i = positionopt;
    
	while (i < str.length) {
		let j = 0;	
        if(str.charAt(i) == search.charAt(j)) {						
            while (j < search.length) {
                if(str.charAt(i+j) == search.charAt(j)) j++;
                else break;
            }
        }
        if(search.length == j)
            return true;			
    
		i++;
	}
	return false;
}