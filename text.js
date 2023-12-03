const currentTime = new Date().getTime();
const futureTime = currentTime + 2000; // Adding 2 seconds in milliseconds

const futureDate = new Date(futureTime);

console.log("Current Time: ", new Date(currentTime));
console.log("Future Time: ", futureDate);
