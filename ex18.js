module.exports = function lastIndexOf(str = "", search, fromIndexopt = str.length - 1) {
    let i = fromIndexopt;
    
	while (i > 0) {
		let j = 0;	
        if(str.charAt(i) == search.charAt(j)) {						
            while (j < search.length) {
                if(str.charAt(i+j) == search.charAt(j)) j++;
                else break;
            }
        }
        if(search.length == j)
            return i;			
    
		i--;
	}
	return -1;
}