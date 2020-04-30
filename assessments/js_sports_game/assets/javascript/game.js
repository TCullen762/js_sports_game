//Clicking either "SHOOT" button represents a shot for that team.
//shots should have a random chance of succeeding or failing
//shots taken should increase every click on the "SHOOT" button
//number of goals should only increase when the shot is successful
//Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.
//Bonus

//need conditional logic for the goal counter. Should be random (math.random?)
// need .innertext to update shots taken
// need .innertext to update goals
//need .innertext to update number of resets
// need to figure out how to do resets

// learn and live the following syntax:

//let count = 0;
//const countspan = document.querySelector("#countspan");
//const counter_button = document.querySelector("#counter_button");
//counter_button.addEventListener("click", function () {
    /* TODO 2
    *
    * Fill in this function so that it increments
    * (adds one to) the variable named count,
    * then updates the inner text of "countspan"
    * to show the current value of "count".
    */
  
   // countspan.innerHTML= count += 1
//})

let teamOne = 0;
const teamOneShots = document.querySelector("#teamone-numshots")
const teamOneGoals = document.querySelector("#teamone-numgoals")
teamone-shoot-button.addEventListener("click", function() {
    //build function here that uses math.random to find a random number
    //make it from 1-10 and use this number to build conditional logic
    // make it print in shots taken in increments
    // make it print in goals in increments
    // refer to prvious activity to figure this out
    //use console.log for testing
})
