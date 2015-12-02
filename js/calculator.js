var Calculator = function(){
	this.n = [];
	this.operator;
	this.r = 0;
}

Calculator.prototype.addition = function(a, b) { return a+b; }
Calculator.prototype.multiply = function(a, b) { return a*b; }
Calculator.prototype.subtract = function(a,b) { return a-b; }
Calculator.prototype.divide = function(a,b) {
	if(b == 0) {
		throw new Error("Error: Devide by zero");
	}
	return a/b;
}