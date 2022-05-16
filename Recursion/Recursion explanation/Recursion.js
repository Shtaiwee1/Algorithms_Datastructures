//Recursion example

function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()


//You can use the call stack feature in dev tools to see the recursion steps, step by step:
//choose a breakpoint by clicking the number next to the line
//hit (ctrl + enter)
//then find the step icon on the top of the side window and click on it the show the progress of recursion
//observe the call stack field and notice the recursion step by step as you can see recursion is like a stack where every function is added at the top executed and then removed
