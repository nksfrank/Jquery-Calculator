/* global $ */
var Calculator = function(){
	this.n = [];
	this.operator;
	this.r = 0;
}

Calculator.prototype.number = function(a) {
	this.r += a;
	return this.r;
}
Calculator.prototype.addition = function(a, b) { return a+b; }
Calculator.prototype.multiply = function(a, b) { return a*b; }
Calculator.prototype.subtract = function(a,b) { return a-b; }
Calculator.prototype.divide = function(a,b) { if(b == 0) throw new Error("Error: Devide by zero"); return a/b; }

$(function() {
	var calc = new Calculator();
	
	$("div#number").on('click', function() {
		var a = calc.number(this.text());
		$("#result").text(a);
	});
});