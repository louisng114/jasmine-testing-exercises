window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

const loanAmount = document.querySelector("#loan-amount");
const loanYears = document.querySelector("#loan-years");
const loanRate = document.querySelector("#loan-rate");
const monthlyPayment = document.querySelector("#monthly-payment");

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmount.value = 100000;
  loanYears.value = 5;
  loanRate.value = 0.7;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = {};
  values["amount"] = Number(loanAmount.value);
  values["years"] = Number(loanYears.value);
  values["rate"] = Number(loanRate.value);
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const loanAmountValue = values["amount"];
  if (!Number.isFinite(loanAmountValue) || loanAmountValue < 0) {
    throw new Error("Invalid input");
  }
  const loanYearsValue = values["years"];
  if (!Number.isFinite(loanYearsValue) || loanYearsValue < 0) {
    throw new Error("Invalid input");
  }
  const loanRateValue = values["rate"];
  if (!Number.isFinite(loanRateValue) || loanRateValue < 0) {
    throw new Error("Invalid input");
  }
  return (Math.ceil((loanAmountValue * loanRateValue / 12 / (1 - (1 + loanRateValue / 12) ** (-12 * loanYearsValue))) * 100) / 100).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (!Number.isFinite(monthly)){
    throw new Error("Infinite or indetermined monthly payment");
  }
  monthlyPayment.innerText = "The monthly payment is $" + monthly;
}
