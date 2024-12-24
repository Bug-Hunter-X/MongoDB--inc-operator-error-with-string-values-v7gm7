# MongoDB $inc operator error with string values

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment or decrement a numeric field.  However, passing a string value instead of a number will lead to unexpected behaviour or an error.

The `bug.js` file shows the incorrect usage.  The `bugSolution.js` file shows the correct usage.

## How to reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection (e.g., `myCollection`).
3.  Insert a document with a numeric field (e.g., `{ _id: 1, field: 0 }`).
4.  Run the code in `bug.js`.
5.  Observe the unexpected behavior.
6.  Run the code in `bugSolution.js` to see the correct outcome. 

## Solution
The solution involves ensuring that the value provided to the `$inc` operator is a number.