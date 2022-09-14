//Files required to run aditional properties from the parent Employee 
const Employee = require('./Employee');

// Using Employee as parent, Intern extends Employee
class Intern extends Employee  {
    constructor (name, id, email, school) {
          // calling constructor function from the Employee (parent) 
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 