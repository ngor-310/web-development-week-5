# SpendWise — Personal Financial Dashboard & Calculator

SpendWise is a responsive, interactive web application designed to help users manage their personal finance and budget effectively. It provides an intuitive dashboard interface to track total budgets, log expenses, and instantly compute remaining balances.

---

## 1. What SpendWise Does
SpendWise acts as a personal financial tracker. The application allows users to:
- Input their overall monthly budget and total expenses.
- Store category-specific financial data (e.g., Food & Dining, Transport, Rent, Entertainment, Savings, Utilities).
- Automatically compute key budgeting metrics including remaining balance and percentage of budget used.
- Display a clearly labeled summary report directly in the browser developer console as well as on the dynamic user interface.

---

## 2. JavaScript Concepts Implemented
The application utilizes foundational JavaScript principles, including:
- **Data Types & Variables**: Storing numerical values, strings, and structured objects.
- **User Input Processing**: Capturing user inputs dynamically via interactive prompts and converting raw input strings into floating-point numbers (`parseFloat`).
- **Input Validation**: Utilizing `isNaN()` and conditional control structures to prevent negative or non-numeric entries.
- **Arithmetic Operators**: Executing standard mathematical calculations such as subtraction, addition, and percentage evaluation.
- **Modular Functions**: Building reusable block routines that accept arguments and compute return values.
- **Console Output Formatting**: Utilizing template literals and custom string padding to present structured, human-readable console reports.

---

## 3. How Variables Are Used
Variables manage state across the life cycle of the application:
- **`const`**: Declares immutable references such as function definitions, primary DOM element handles, and configuration constants.
- **`let`**: Manages mutable numerical data that updates during runtime, such as `monthlyBudget`, `monthlyExpenses`, and calculated metrics like `remainingBalance`.

---

## 4. How User Input Is Collected
User input is collected interactively through native JavaScript dialog boxes:
1. `prompt()` pop-ups request the user to enter their total budget and accumulated expenses.
2. The returned raw text values are checked and converted into numeric data types using `parseFloat()`.
3. Input validation logic checks whether the user provided valid non-negative numbers before proceeding with calculations.

---

## 5. How Calculations Are Performed
Financial calculations are executed using arithmetic logic:
- **Remaining Balance**: Computed by subtracting the overall expenses from the overall budget:
  $$\text{Balance} = \text{Budget} - \text{Expenses}$$
- **Percentage Spent**: Calculated by dividing total expenses by total budget and multiplying by 100:
  $$\text{Percentage} = \left(\frac{\text{Expenses}}{\text{Budget}}\right) \times 100$$
- **Output Formatting**: Numerical results are rounded and formatted to two decimal places using `.toFixed(2)`.

---

## 6. How Functions Help Organize the Code
Functions divide the program into single-purpose, reusable components following the principle of separation of concerns:
- **`calculateBalance(budget, expenses)`**: Pure mathematical function dedicated strictly to subtracting expenses from budget and returning the remaining balance.
- **`calculateSpentPercentage(budget, expenses)`**: Dedicated helper function that computes the percentage of the budget consumed.
- **`displayResults(budget, expenses, balance, percentage)`**: Responsible for organizing and displaying the final formatted financial report in the browser console.
- **`runSpendWise()`**: Serves as the main initialization function coordinating user input collection, validation execution, calculation processing, and output delivery.
