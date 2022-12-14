//Files required to run aditional properties from the parent Employee 
const Employee = require('./Employee');

// Using Employee as parent, Manager extends Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling constructor function from the Employee (parent) 
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // Overridden to return 'Manager'
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 