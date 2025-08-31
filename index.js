
// the idea is to create a guessing game
// we have a max integer of 100
// we have a min integer of 1
// we will use a randomized integer to get the answer
// user will find the answer

let min = 1;
let max = 100;

let answer = Math.floor(Math.random() * 100);

console.log(answer);

let attempt = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt("Guess a number : ");
    guess = Number(guess);

    if(isNaN(guess) || guess < min || guess > max)
    {
        console.log("Wrong number, not an integer, or not b/w min max.")
        window.alert("Please enter a valid number!")
    }
    else
    {
        attempt++;
        if(guess < answer)
        {
            window.alert("Too low. Try again !")
        }
        else if(guess > answer)
        {
            window.alert("Too high. Try again !")
        }
        else
        {
            window.alert("CORRECT", answer ,"! It took ", attempt)
            running = false;
        }
    }
}