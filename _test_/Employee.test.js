const Employee = require('../lib/Employee');

test('Employee object...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test('Display employee name...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getName()).toBe(expect.any(String));
});

test('Display employee ID...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getId()).toBe(expect.any(Number));
});

test('Display employee email...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test('Display role of employee...', () => {
    const employee = new Employee('Jane Smith', 25, 'JaneS@test.com');

    expect(employee.getRole()).toBe("Employee");
}); 