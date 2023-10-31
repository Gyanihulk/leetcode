// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Example 1:

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation:
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.
// Example 2:

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(false);

  const dfs = (room) => {
    visited[room] = true;
for(const key of rooms[room]){
    if(!visited[key]){
        dfs(key)
    }
}  
};

dfs(0)

return visited.every((room)=>room)
};

// Test case 1
const rooms1 = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms1)); // Output: true
// Explanation: We can visit all rooms by picking up the keys as described in the example.

// Test case 2
const rooms2 = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms2)); // Output: false
// Explanation: We cannot enter room number 2 since the only key that unlocks it is in that room.

// Test case 3
const rooms3 = [[]];
console.log(canVisitAllRooms(rooms3)); // Output: true

// Explanation: There is only one room, and it's already unlocked.

// Test case 4
const rooms4 = [[1], [0, 2], [3], []];
console.log(canVisitAllRooms(rooms4)); // Output: true
// Explanation: We can visit all rooms in a linear order, picking up the required keys as needed.

// Test case 5
const rooms5 = [[1, 2], [2, 3], [3], []];
console.log(canVisitAllRooms(rooms5)); // Output: true
// Explanation: We can visit all rooms by picking up keys from the adjacent rooms.

// Test case 6
const rooms6 = [[]];
console.log(canVisitAllRooms(rooms6)); // Output: true
// Explanation: There is only one room
