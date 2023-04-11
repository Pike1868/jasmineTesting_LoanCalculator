it("should calculate the monthly rate correctly", function () {
  const initialValues = { amount: 1000, years: 10, rate: 10.0 };

  expect(calculateMonthlyPayment(initialValues)).toEqual('13.22');
});




it("should return a result with 2 decimal places", function () {
  const initialValues = { amount: 1000, years: 10, rate: 10.0 };

  expect(calculateMonthlyPayment(initialValues)).toEqual('13.22');
});
