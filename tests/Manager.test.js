const Manager = require('../lib/Manager');

test('Creates new Manager.', () => {
    const manager = new Manager('Chester Wilkingshire IV', 42, 'veryreal@email.com', 42);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Checks role of employee.', () => {
    const manager = new Manager('Chester Wilkingshire IV', 42, 'veryreal@email.com', 42);

    expect(manager.getRole()).toEqual("Manager");
}); 