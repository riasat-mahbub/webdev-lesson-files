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
let forArray = [];
array.forEach(i => {
  forArray.push(i.username + '!');
});

console.log("forArray: { " + forArray + " }");

//Create an array using map that has all the usernames with a "? to each of the usernames

let mapArray = array.map(i => i.username+"?");
console.log("mapArray: { " + mapArray + " }");

//Filter the array to only include users who are on team: red
let redArray = array.filter(i => i.team === "red");
redArray.forEach( i => console.log(i)); 

//Find out the total score of all users using reduce
let totalScore = array.reduce( (acc,i) => acc+i.score ,0 );
console.log("totalScore: " + totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9]; //i is position
const newArray = arrayNum.map((num, i) => num * 2);
console.log("newArray: { " + newArray + " }");

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let bonusArray = array.map( i =>{
  i.items = i.items.map( j => j + "!");
  return i;
});

bonusArray.forEach(i => console.log(i));