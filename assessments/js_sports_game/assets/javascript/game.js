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

//TODO: 
//1. Set variables - Done
//2. get clicker to work -Done
//3. add conditional logic using math.random to evaluate and tally goals
//3 (continued)possibly by setting abother variable for goals and using inner HTML


let resets =0

const numResets = document.querySelector("#num-resets")//secets node
const numResets_button =document.querySelector("#reset-button")//selects button
numResets_button.addEventListener("click",function(){
  
   teamOneShots.innerHTML = teamOne = 0
   teamOneGoalTally.innerHTML=teamOneGoal = 0
   teamTwoShots.innerHTML=teamTwo =0
   teamTwoGoalTally.innerHTML=teamOneGoal = 0

   numResets.innerHTML = resets += 1
   
    console.log("reset button works")//test
})

let teamOne = 0

const teamOneShots = document.querySelector("#teamone-numshots") //selects node
const teamOneShots_button = document.querySelector("#teamone-shoot-button")//selects button
teamOneShots_button.addEventListener("click", function() {//adds functionality to the button and makes something happen
    console.log("Team one shot counter works")//test
 
   teamOneShots.innerHTML = teamOne  += 1
  

    

})

//Begin Conditional logic 
//1. set variables - done 
//2. begin if else statements math.random - done
//3. sort out inner HTML - done

let teamOneGoal = 0


const teamOneGoalTally = document.querySelector("#teamone-numgoals")//selects node
teamOneShots_button.addEventListener("click", function(){ //activates conditional logic  and Math.Random sequence when button is clicked.
   console.log("team one goal tally works")//test
  
   if((Math.floor(Math.random()*10)+1) <=2){
   teamOneGoalTally.innerHTML=teamOneGoal += 1
   }
   
})

//TODO:
//repeat above process for team 2 module
// figure out the reset button


let teamTwo = 0

const teamTwoShots = document.querySelector("#teamtwo-numshots") //selects node
const teamTwoShots_button = document.querySelector("#teamtwo-shoot-button")//selects button
teamTwoShots_button.addEventListener("click", function() {//adds functionality to the button and makes something happen
   console.log("team two shot counter works")
 
   teamTwoShots.innerHTML=teamTwo += 1
})

let teamTwoGoal = 0


const teamTwoGoalTally = document.querySelector("#teamtwo-numgoals")//selects node
teamTwoShots_button.addEventListener("click", function(){ //activates conditional logic  and Math.Random sequence when button is clicked.
   console.log("team two goal tally works")//test
  
   if((Math.floor(Math.random()*10)+1) <=2){
   teamTwoGoalTally.innerHTML=teamOneGoal += 1
   }
   
})