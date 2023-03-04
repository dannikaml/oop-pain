const Engineer = require('../lib/Engineer');
 
test('Engineer object...', () => {
    const engineer = new Engineer('Jane Smith', 25, 'JaneS@test.com');
    
    expect(engineer.github).toBe(expect.any(String));
});

test('Display Engineer GitHub...', () => {
    const engineer = new Engineer('Jane Smith', 25, 'JaneS@test.com');

    expect(engineer.getGithub()).toBe(expect.stringContaining(engineer.github.toString()));
});

test('Display role of employee', () => {
    const engineer = new Engineer('Jane Smith', 25, 'JaneS@test.com');

    expect(engineer.getRole()).toBe("Engineer");
});