class Student{ // the name of the class must be camelcased
  constructor(firstName , lastName  ){ //this keyword is mandatory
      this.firstName = firstName;
      this.lastName = lastName;
      this.absent=0
  }

  fullName(){
      this.absent+=1;
      return `your first name is ${this.firstName} and your last name is ${this.lastName} absent times: ${this.absent}`;
}

}

let firstStudent = new Student("Mohammad" , "Omair"); // instances are instantiated after the class
//let secondStudent = new Student("hammad" , "air");




console.log(firstStudent.fullName())
//firstStudent.absentTimes()

//secondStudent.fullName()
//secondStudent.absentTimes()