// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const unames = [];
const getnames = array.forEach((user) => {
  unames.push(user.username + '!');
});
console.log(unames);

//Create an array using map that has all the usernames with a "? to each of the usernames
const qnames = array.map(user => user.username + '?');
console.log(qnames);

//Filter the array to only include users who are on team: red
const reds = array.filter(user => user.team === 'red');
console.log(reds);

//Find out the total score of all users using reduce
const totalScore = array.reduce((total, user) => {
  return total + user.score; },0);
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end
