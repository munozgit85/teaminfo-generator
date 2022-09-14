//Files required to run aditional properties from the parent Employee 
const Employee = require("./Employee");

// Using Employee as parent, Engineer extends Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling function on the Employee (parent) 
        super (name, id, email);
        this.github = github; 
    }

    // returning github username from input 
    getGithub () {
        return this.github;
    }

     //overridden to return Engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 