const Engineer = require('../lib/Engineer');
 
test('Engineer object...', () => {
    const engineer = new Engineer('Jane Smith', 25, 'JaneS@test.com', 'janesmith1');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('Display role of employee', () => {
    const engineer = new Engineer('Jane Smith', 25, 'JaneS@test.com', 'janesmith1');

    expect(engineer.getRole()).toEqual("Engineer");
});