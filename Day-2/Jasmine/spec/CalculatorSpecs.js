describe("A calculator",function(){
	describe("Add operation",function(){
		it("should be able to add two numbers",function(){
			//arrange
			var number1 = 10,
				number2 = 20,
				expectedResult = 30;

			//act
			var result = add(number1,number2);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add two numbers in string format",function(){
			//arrange
			var number1AsString = "10",
				number2AsString = "20",
				expectedResult = 30;

			//act
			var result = add(number1AsString,number2AsString);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to treat non numeric strings as zero",function(){
			//arrange
			var nonNumericString1 = "abc",
				number2 = 10;
				expectedResult = 10;

			//act
			var result = add(nonNumericString1,number2);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add one argument",function(){
			//arrange
			var	number1 = 10;
				expectedResult = 10;

			//act
			var result = add(number1);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add variable length arguments",function(){
			//arrange
			var	number1 = 10,
				number2 = 20,
				number3 = 30,
				expectedResult = 60;

			//act
			var result = add(number1,number2,number3);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept a function returning a number as argument",function(){
			//arrange
			var	fnReturningNumber1 = function(){ return 10;},
				expectedResult = 10;

			//act
			var result = add(fnReturningNumber1);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept a function returning a function returning a number as argument",function(){
			//arrange
			var	fnReturningFunctionReturningNumber1 = function(){ return function(){ return 10;}},
				expectedResult = 10;

			//act
			var result = add(fnReturningFunctionReturningNumber1);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept an array of numbers as the argument",function(){
			//arrange
			var	arrayOfNumbers = [10,20,30],
				expectedResult = 60;

			//act
			var result = add(arrayOfNumbers);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept multiple arrays of numbers as the argument",function(){
			//arrange
			var	arrayOfNumbers1 = [10,20,30],
				arrayOfNumbers2 = [40,50,60],
				expectedResult = 210;

			//act
			var result = add(arrayOfNumbers1,arrayOfNumbers2);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept nested array of numbers as the argument",function(){
			//arrange
			var	arrayOfNumbers = [10,[20,[30]]],
				expectedResult = 60;

			//act
			var result = add(arrayOfNumbers);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept array of functions returning numbers as the argument",function(){
			//arrange
			var	fnReturningFunctionReturningNumber1 = function(){ return function(){ return 10;}},
				fnReturninNumber = function(){ return 20;},
				expectedResult = 30;

			//act
			var result = add([fnReturningFunctionReturningNumber1,fnReturninNumber]);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to accept array of functions returning array of numbers as the argument",function(){
			//arrange
			var	fnReturningFunctionReturningNumber1 = function(){ return function(){ return [10,20];}},
				fnReturninNumber = function(){ return [30,40];},
				expectedResult = 100;

			//act
			var result = add([fnReturningFunctionReturningNumber1,fnReturninNumber]);

			//assert
			expect(result).toBe(expectedResult);
		});
	});
	

});