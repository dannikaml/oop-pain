const Employee = require('../lib/Employee');

test('Employee object...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Display employee name...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Display employee ID...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Display employee email...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Display role of employee...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getRole()).toEqual("Employee");
}); 