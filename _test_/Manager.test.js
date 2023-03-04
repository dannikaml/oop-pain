const Manager = require('../lib/Manager');
 
test('Manager object...', () => {
    const manager = new Manager('John Smith', 45, 'jsmith@test.com', 10);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Displayed role of Employee', () => {
    const manager = new Manager('Jane Smith', 25, 'JaneS@test.com');

    expect(manager.getRole()).toEqual("Manager");
}); 