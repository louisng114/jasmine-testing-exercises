
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({"amount" : 100000 , "years" : 5 , "rate" : 0.07})).toBe("1980.12");
  expect(calculateMonthlyPayment({"amount" : 5000 , "years" : 1 , "rate" : 0.05})).toBe("428.04");
  expect(calculateMonthlyPayment({"amount" : 100000 , "years" : 0 , "rate" : 1})).toBe("Infinity");
  expect(calculateMonthlyPayment({"amount" : 0 , "years" : 0 , "rate" : 1})).toEqual("NaN");
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({"amount" : 0 , "years" : 10 , "rate" : 1})).toBe("0.00");
});

it("should throw an error for invalid inputs", function () {
  expect(() => calculateMonthlyPayment({"amount" : -100000 , "years" : 5 , "rate" : 0.07})).toThrowError();
  expect(() => calculateMonthlyPayment({"amount" : "something" , "years" : 5 , "rate" : 0.07})).toThrowError();
  expect(() => calculateMonthlyPayment({"amount" : 100000 , "years" : -5 , "rate" : 0.07})).toThrowError();
  expect(() => calculateMonthlyPayment({"amount" : 100000 , "years" : "something" , "rate" : 0.07})).toThrowError();
  expect(() => calculateMonthlyPayment({"amount" : 100000 , "years" : 5 , "rate" : -0.07})).toThrowError();
  expect(() => calculateMonthlyPayment({"amount" : 100000 , "years" : 5 , "rate" : "something"})).toThrowError();
});

it("should throw an error for nonsensical interest", function () {
  expect(() => updateMonthly(Infinity)).toThrowError();
  expect(() => updateMonthly(NaN)).toThrowError();
});
