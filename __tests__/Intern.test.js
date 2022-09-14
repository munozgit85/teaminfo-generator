// file for Intern contructor function 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates the Intern properties', () => {
    const intern = new Intern('Racquel', 37, 'racquelg85@hotmail.com', 'UTSA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// test function to obtain school from getSchool()
test('obtains the school of employee', () => {
    const intern = new Intern('Racquel', 37, 'racquelg85@hotmail.com', 'UTSA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// function test for  getRole() 
test('obtains role of employee as intern', () => {
    const intern = new Intern('Racquel', 37, 'racquelg85@hotmail.com', 'UTSA');

    expect(intern.getRole()).toEqual("Intern");
}); 