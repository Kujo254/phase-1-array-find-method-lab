// code your solution here
// Sample data
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  // More records...
];

// Function to find the year of a Superbowl win
function superbowlWin(record) {
  // Use find to return the first win
  const winRecord = record.find(game => game.result === "W");

  // Return the year of the first win, or undefined if no win
  return winRecord ? winRecord.year : undefined;
}

// Example usage
console.log(superbowlWin(record)); // This will return "2015" if the win is found
