function add(){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (typeof n === "string") return  !isNaN(n) ? 1 * n : 0;
		if (!!n.length)	return add.apply(this,n);
		return n;	
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) 
		: parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}