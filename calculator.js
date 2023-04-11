window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  if (document.getElementById("loan-rate").value > 0) {
    return {
      amount: +document.getElementById("loan-amount").value,
      years: +document.getElementById("loan-years").value,
      rate: +document.getElementById("loan-rate").value,
    };
  } else {
    alert("Interest can not be negative");
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  const initialValues = { amount: 100000, years: 10, rate: 8.0 };
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  amount.value = initialValues.amount;
  years.value = initialValues.years;
  rate.value = initialValues.rate;
  update();
}

function update(amount, years, rate) {
  // Get the current values from the UI
  const loanDetails = getCurrentUIValues();
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(loanDetails));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let i = values.rate / 100 / 12;
  let n = Math.floor(values.years * 12);

  let monthlyPayment = (principle * i) / (1 - Math.pow(1 + i, -n));

  monthlyPayment = parseFloat(monthlyPayment).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = `$${monthly}`;
}
