
// the idea is to create a guessing game
// we have a max integer of 100
// we have a min integer of 1
// we will use a randomized integer to get the answer
// user will find the answer

let min = 1;
let max = 100;

let answer = Math.floor(Math.random() * 100);

let userInput = 0;

console.log("Answer : ", answer)
while(answer != userInput)
{
    userInput = prompt("pass a number: ");
    if(answer > userInput)
    {
        console.log("It is lower then the target number!", answer)
    }
    else if(answer < userInput)
    {
        console.log("It is higher then the target number!", answer)
    }
    else
    {
        console.log("answer is found");
    }
}