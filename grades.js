// JavaScript Lab Exercise: Array Manipulation
// Student Grade Management System
// Run in the browser console or with: node grades.js

let grades = [85, 92, 78, 88, 95];

function header(title) {
  console.log("\n==============================");
  console.log(title);
  console.log("==============================");
}

// ---------- Task 1: Display the Grades ----------
header("Task 1: Display the Grades");
for (let i = 0; i < grades.length; i++) {
  console.log(`Index ${i}: ${grades[i]}`);
}
console.log(`Total number of grades: ${grades.length}`);

// ---------- Task 2: Add and Remove Grades ----------
header("Task 2: Add and Remove Grades");

grades.push(90);
console.log("After push(90):         ", grades);

grades.pop();
console.log("After pop():            ", grades);

grades.splice(2, 0, 80); // at index 2, delete 0 items, insert 80
console.log("After splice(2, 0, 80): ", grades);

// ---------- Task 3: Sort and Filter Grades ----------
header("Task 3: Sort and Filter Grades");

// Copies ([...grades]) are used so sort() does not change the original array
const ascending = [...grades].sort((a, b) => a - b);
console.log("Ascending (lowest to highest):", ascending);

const highGrades = grades.filter((g) => g >= 85);
console.log("Grades >= 85:                 ", highGrades);

const descending = [...grades].sort((a, b) => b - a);
console.log("Descending (highest to lowest):", descending);

// ---------- Task 4: Calculate Grade Statistics ----------
header("Task 4: Calculate Grade Statistics");

const sum = grades.reduce((total, g) => total + g, 0);
const average = sum / grades.length;
const highest = Math.max(...grades);
const lowest = Math.min(...grades);

console.log(`Sum:     ${sum}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest:  ${lowest}`);

// ---------- Task 5: Convert Grades to Remarks ----------
header("Task 5: Convert Grades to Remarks");

function getRemark(grade) {
  if (grade >= 90) return "Excellent";
  if (grade >= 85) return "Very Good";
  if (grade >= 80) return "Good";
  if (grade >= 75) return "Passed";
  return "Failed";
}

// map() returns a NEW array; the original grades array is untouched
const remarks = grades.map(getRemark);

grades.forEach((grade, i) => {
  console.log(`${grade} - ${remarks[i]}`);
});

console.log("\nOriginal array (unchanged):", grades);
console.log("Remarks array:             ", remarks);