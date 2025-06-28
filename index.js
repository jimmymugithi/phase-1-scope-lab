// Write your solution in this file!
// Declare customerName in global scope using var
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer (creates a global variable)
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'initial customer';

// Function that tries to change a constant (will throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer';
}
