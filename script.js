//parent class
class School {

  constructor(name, level, numberOfStudents) {
   this._name = name;
   this._level = level;
   this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (value = number) {
      return this._numberOfStudents;
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
  }

  quickFacts(){
   console.log('SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.')
  }

  static pickSubstituteTeacher(substituteTeacher){
    const randomNumber = Math.floor(Math.random() * substituteTeacher.length);
    return substituteTeacher;
  }
}

//a primary school subclass that inherits from class school
class PrimarySchool extends School {
   constructor(name, numberOfStudents,  pickupPolicy) {
  super(name, 'primary', numberOfStudents);
  this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}


//a high school subclass that inherits from class school
class HighSchool extends School {

  constructor(name, numberOfStudents,sportsTeam) {
  super(name, 'high', numberOfStudents);
  this._sportsTeam = sportsTeam;
  }

  get sportsTeam() {
    return this._sportsTeam;
  }
}

//a new instance of a primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//a quick fact about this school's policy
lorraineHansbury.quickFacts();

//generating a random substitute teacher
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

//a new instance of a high school
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//loging all the sport teams at this high school
console.log(alSmith.sportsTeam);










