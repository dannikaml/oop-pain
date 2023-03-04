const Intern = require('../lib/Intern');

test('Intern object/set school...', () => {
    const intern = new Intern('John Smith', 22, 'jsmith@test.com', 'Vanderbilt');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('Display employees school...', () => {
    const intern = new Intern('John Smith', 22, 'jsmith@test.com', 'Vanderbilt');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Display role of employee...', () => {
    const intern = new Intern('John Smith', 22, 'jsmith@test.com', 'Vanderbilt');

    expect(intern.getRole()).toEqual("Intern");
}); 
