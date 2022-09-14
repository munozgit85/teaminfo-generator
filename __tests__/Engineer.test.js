// file for Engineer contructor function 
const Engineer = require('../lib/Engineer');

// Test for Engineer properties 
test('creates the Engineer properties', () => {
    const engineer = new Engineer('Racquel', 37, 'racquelg85@hotmail.com', 'munozgit85');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// getGithub() test function to obtain github username
test('gets engineer github username', () => {
    const engineer = new Engineer('Racquel', 37, 'racquelg85@hotmail.com', 'munozgit85');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('assign role as Engineer', () => {
    const engineer = new Engineer('Racquel', 37, 'racquelg85@hotmail.com', 'munozgit85');

    expect(engineer.getRole()).toEqual("Engineer");
});