//creating any array to hold the jokes 
const jokesQuestion = ["Why don't scientists trust atoms?",
"What did one wall say to the other wall?",
"Why did the scarecrow win an award?",
"How do you organize a space party?",
"Why don't skeletons fight each other?",
"What do you call fake spaghetti?",
"Why did the bicycle fall over?",
"Did you hear about the mathematician who’s afraid of negative numbers?",
"What did one ocean say to the other ocean?",
"Why did the tomato turn red?"];
const jokeAnswer = ["Because they make up everything!",
"I'll meet you at the corner.",
"Because he was outstanding in his field!",
"You planet!",
"They don't have the guts.",
"An impasta.",
"Because it was two-tired!",
"He will stop at nothing to avoid them.",
"Nothing, they just waved.",
"Because it saw the salad dressing!"];

//to pick a random joke question
function pickAQuestion(arr)
{
    let jokeQesIndex = Math.floor(Math.random()*(arr.length-1))
    return jokeQesIndex
}
// getting the index number using function
let indexOfArray = pickAQuestion(jokesQuestion)

//printing the jokes to console
console.log(jokesQuestion[indexOfArray])

console.log(jokeAnswer[indexOfArray])