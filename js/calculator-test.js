/* global QUnit */
QUnit.test("Operands", function(assert) {
	var calc = new Calculator();
	assert.equal(calc.addition(5, 5), 10, "10");
	assert.equal(calc.addition(-5, 5), 0, "0");
	
	assert.equal(calc.subtract(10, 5), 5, "5");
	assert.equal(calc.subtract(0, 5), -5, "-5");
	
	assert.equal(calc.multiply(1, 1), 1, "1");
	assert.equal(calc.multiply(10, 10), 100, "100");
	assert.equal(calc.multiply(0, 10), 0, "0");
	assert.equal(calc.multiply(100, 0.1), 10, "10");
	
	assert.throws(function() { calc.divide(10, 0) }, new Error("Error: Devide by zero"), "NaN");
	assert.equal(calc.divide(10, 5), 2, "2");
	assert.equal(calc.divide(1, 1), 1, "1");
})