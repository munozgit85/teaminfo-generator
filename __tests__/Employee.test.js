//Add file with contructor function for Emplyee
const Employee = require('../lib/Employee');

//Test for Employee object 
test(`create properties`, () => {
    const employee = new Employee('Racquel', '37', 'racquelg85@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toString(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//Get employee name from id 
test(`get employee name from id`, () => {
    const employee = new Employee ('Racquel', '37', 'racquelg85@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});

//Get id from employee id 
test(`get employee ID number`, () => {
    const employee = new Employee ('Racquel', '37', 'racquelg85@hotmail.com');

    expect(employee.getId()).toString(expect.any(Number));
});

//Get email from getEmail
test('get employee email', () => { 
    const employee = new Employee ('Racquel', '37', 'racquelg85@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Get role from getRole
test('gets role of employee', () => {
    const employee = new Employee ('Racquel', '37', 'racquelg85@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
});