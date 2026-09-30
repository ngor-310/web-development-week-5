// ==========================================================================
// SPENDWISE - PERSONAL BUDGET CALCULATOR (CONSOLE APP)
// ==========================================================================

// --------------------------------------------------------------------------
// 1. REUSABLE FUNCTIONS
// --------------------------------------------------------------------------

/**
 * Calculates remaining balance by subtracting total expenses from budget.
 * @param {number} budget 
 * @param {number} expenses 
 * @returns {number} Net remaining balance
 */
function calculateBalance(budget, expenses) {
  return budget - expenses;
}

/**
 * Calculates what percentage of the total budget has been spent.
 * @param {number} budget 
 * @param {number} expenses 
 * @returns {number} Percentage spent
 */
function calculateSpentPercentage(budget, expenses) {
  if (budget === 0) return 0;
  return (expenses / budget) * 100;
}

/**
 * Formats and displays all budget results clearly in the browser console.
 * @param {number} budget 
 * @param {number} expenses 
 * @param {number} balance 
 * @param {number} percentage 
 */
function displayResults(budget, expenses, balance, percentage) {
  console.log("==========================================");
  console.log("       SPENDWISE FINANCIAL SUMMARY        ");
  console.log("==========================================");
  console.log(`Total Monthly Budget : $${budget.toFixed(2)}`);
  console.log(`Total Expenses       : $${expenses.toFixed(2)}`);
  console.log(`Remaining Balance    : $${balance.toFixed(2)}`);
  console.log(`Budget Used          : ${percentage.toFixed(1)}%`);
  console.log("------------------------------------------");

  if (balance < 0) {
    console.warn("STATUS: WARNING — You have overspent your budget!");
  } else if (balance === 0) {
    console.log("STATUS: CAUTION — You have exactly zero balance remaining.");
  } else {
    console.log("STATUS: OK — You are within your budget limits!");
  }
  console.log("==========================================");
}

// --------------------------------------------------------------------------
// 2. APPLICATION INITIALIZATION & USER INPUT
// --------------------------------------------------------------------------

function runSpendWise() {
  console.log("Initializing SpendWise Budget Calculator...");

  // Collect budget data via prompts
  const rawBudget = prompt("Welcome to SpendWise!\n\nPlease enter your Total Monthly Budget ($):");
  const rawExpenses = prompt("Please enter your Total Monthly Expenses ($):");

  // Store parsed variables
  const monthlyBudget = parseFloat(rawBudget);
  const monthlyExpenses = parseFloat(rawExpenses);

  // Validate user inputs
  if (isNaN(monthlyBudget) || isNaN(monthlyExpenses) || monthlyBudget < 0 || monthlyExpenses < 0) {
    console.error("ERROR: Invalid input provided. Please enter positive numerical values for budget and expenses.");
    alert("Invalid numerical input. Please refresh the page and try again.");
    return;
  }

  // Perform calculations using reusable functions
  const remainingBalance = calculateBalance(monthlyBudget, monthlyExpenses);
  const percentSpent = calculateSpentPercentage(monthlyBudget, monthlyExpenses);

  // Display clearly formatted results in the console
  displayResults(monthlyBudget, monthlyExpenses, remainingBalance, percentSpent);
}

// Execute prompt workflow when script loads
runSpendWise();

