// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

var interpret = function (command) {
  let answer = "";
  for (let i = 0; i < command.length; i++) {
    console.log()
    if (command[i] == "g" || command[i] == "G") {
      answer += "G";
    } else if ((command[i] = "(" && command[i + 1] == ")")) {
      answer += "o";
      i++
    } else if (
      (command[i] =
        "(" &&
        command[i + 1] == "a" &&
        command[i + 2] == "l" &&
        command[i + 3] == ")")

    ) {
      answer += "al";i+=3
    }
  }
  return answer;
};

console.log(interpret("G()(al)"));
