const Employee = require('../lib/Employee');

test('Creates new employee.', () => {
    const employee = new Employee('Chester Wilkingshire IV', 42, 'veryreal@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('Checks for name.', () => {
    const employee = new Employee('Chester Wilkingshire IV', 42, 'veryreal@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('Checks for employee ID.', () => {
    const employee = new Employee('Chester Wilkingshire IV', 42, 'veryreal@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('Checks for email.', () => {
    const employee = new Employee('Chester Wilkingshire IV', 42, 'veryreal@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('Checks role of employee.', () => {
    const employee = new Employee('Chester Wilkingshire IV', 42, 'veryreal@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 