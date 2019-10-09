module.exports = function indexOf(str = "", search, fromIndexopt = 0) {
    let i = fromIndexopt;
    
	while (i < str.length) {
		let j = 0;	
        if(str.charAt(i) == search.charAt(j)) {						
            while (j < search.length) {
                if(str.charAt(i+j) == search.charAt(j)) j++;
                else break;
            }
        }
        if(search.length == j)
            return i;			
    
		i++;
	}
	return -1;
}