//in google snippets you have to run the code first everytime you change anything
//then you can use console to execute the code 

class Student{ // the name of the class must be camelcased
    constructor(firstName , lastName  ){ //this keyword is mandatory
        this.firstName = firstName;
        this.lastName = lastName;
        this.absent=0
        this.scores = [];
    }

    fullName(){
        
    return `your first name is ${this.firstName} and your last name is ${this.lastName} absent times: ${this.absent}`;
}

    absentTimes(){
        this.absent+=1;
        if(this.absent > 3){
            return "YOU HAVE BEEN EXPELLED YOU ARE OUUUUUUUUUT!!!!!!1";
        }
        
        return `You have been absent for ${this.absent} number of times`
    }

    addScore(score){
        this.scores.push(score)
        return this.scores // in a any function don't forget to always return something
    }

    calcAverage(){
        let sum = this.scores.reduce( (a,b) => a+b )
        return sum/this.scores.length;
    }
/*//same as
    calcAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum / this.scores.length;
    }*/
}

let firstStudent = new Student("Mohammad" , "Omair"); // instances are instantiated after the class
let secondStudent = new Student("hammad" , "air");



//firstStudent.fullName()
firstStudent.absentTimes()

//secondStudent.fullName()
//secondStudent.absentTimes()


/*
Instance Methods
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"
*/





/*
    Class Methods
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    
    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])
*/




/*
    How we'll be using classes
class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}*/











/*
    Recap
Classes are blueprints that when created make objects known as instances
Classes are instantiated with the new keyword
The constructor function is a special function that gets run when the class is instantiated
Instance methods can be added to classes similar to methods in objects
Class methods can be added using the static keyword
*/