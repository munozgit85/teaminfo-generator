//Required files with constructor function 
const Manager = require('../lib/Manager');

//test manager properties 
test('creates the properties for the manager', () => {
    const manager = new Manager ('Racquel', 37, 'racquelg85@hotmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// test to obtain getRole()
test('obtain the role of manager', () => {
    const manager = new Manager ('Racquel', 37, 'racquelg85@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 

